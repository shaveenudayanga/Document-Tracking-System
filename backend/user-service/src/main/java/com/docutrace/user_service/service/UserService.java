package com.docutrace.user_service.service;

import com.docutrace.user_service.dto.*;
import com.docutrace.user_service.exception.ConflictException;
import com.docutrace.user_service.exception.NotFoundException;
import com.docutrace.user_service.model.User;
import com.docutrace.user_service.model.UserRole;
import com.docutrace.user_service.repository.UserRepository;
import com.docutrace.user_service.security.JwtService;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Business logic service for user management and authentication.
 */
@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

	private static final Logger log = LoggerFactory.getLogger(UserService.class);

	private final UserRepository userRepository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;

	/** Registers a new user. */
	@Transactional
	public UserResponse register(UserRegistrationRequest request) {
		if (userRepository.existsByEmail(request.getEmail())) {
			throw new ConflictException("Email already registered");
		}
		User user = User.builder()
				.id(UUID.randomUUID())
				.name(request.getName())
				.email(request.getEmail().toLowerCase())
				.password(passwordEncoder.encode(request.getPassword()))
				.role(request.getRole() == null ? UserRole.USER : request.getRole())
				.active(true)
				.build();
		userRepository.save(user);
		log.info("New user registered: {} ({})", user.getEmail(), user.getRole());
		return toDto(user);
	}

	/** Authenticates user credentials returning access + refresh tokens. */
	public AuthResponse authenticate(AuthRequest request) {
		User user = userRepository.findByEmail(request.getEmail().toLowerCase())
				.orElseThrow(() -> new UsernameNotFoundException("Invalid credentials"));
		if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
			throw new UsernameNotFoundException("Invalid credentials");
		}
		if (!user.isActive()) {
			throw new UsernameNotFoundException("Account disabled");
		}
		String access = jwtService.generateAccessToken(user.getEmail(), java.util.Map.of(
				"role", user.getRole().name()
		));
		String refresh = jwtService.generateRefreshToken(user.getEmail());
		log.info("User authenticated: {}", user.getEmail());
		return AuthResponse.builder().accessToken(access).refreshToken(refresh).build();
	}

	/** Issues a new access token using a valid refresh token. */
	public AuthResponse refresh(RefreshTokenRequest request) {
		var claims = jwtService.parse(request.getRefreshToken()).getBody();
		String email = claims.getSubject();
		User user = userRepository.findByEmail(email).orElseThrow(() -> new UsernameNotFoundException("Invalid refresh"));
		String access = jwtService.generateAccessToken(user.getEmail(), java.util.Map.of(
				"role", user.getRole().name()
		));
		return AuthResponse.builder().accessToken(access).refreshToken(request.getRefreshToken()).build();
	}

	/** Returns the profile of authenticated user by email. */
	public UserResponse profile(String email) {
		return toDto(userRepository.findByEmail(email).orElseThrow(() -> new NotFoundException("User not found")));
	}

	/** Admin: list all users. */
	public List<UserResponse> listAll() {
		return userRepository.findAll().stream().map(this::toDto).collect(Collectors.toList());
	}

	/** Admin: update user role. */
	@Transactional
	public UserResponse updateRole(UUID id, UserRole newRole) {
		User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("User not found"));
		user.setRole(newRole);
		return toDto(user);
	}

	/** Admin: activate/deactivate user. */
	@Transactional
	public UserResponse setActive(UUID id, boolean active) {
		User user = userRepository.findById(id).orElseThrow(() -> new NotFoundException("User not found"));
		user.setActive(active);
		return toDto(user);
	}

	/** Admin: delete user. */
	@Transactional
	public void delete(UUID id) {
		if (!userRepository.existsById(id)) {
			throw new NotFoundException("User not found");
		}
		userRepository.deleteById(id);
	}

	private UserResponse toDto(User u) {
		return UserResponse.builder()
				.id(u.getId())
				.name(u.getName())
				.email(u.getEmail())
				.role(u.getRole())
				.active(u.isActive())
				.createdAt(u.getCreatedAt())
				.updatedAt(u.getUpdatedAt())
				.build();
	}

	/** Loads a user for Spring Security authentication operations. */
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByEmail(username.toLowerCase())
				.orElseThrow(() -> new UsernameNotFoundException("User not found"));
		return org.springframework.security.core.userdetails.User
				.withUsername(user.getEmail())
				.password(user.getPassword())
				.roles(user.getRole().name())
				.disabled(!user.isActive())
				.build();
	}
}
