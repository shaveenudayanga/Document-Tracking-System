package com.docutrace.user_service.controller;

import com.docutrace.user_service.dto.*;
import com.docutrace.user_service.model.UserRole;
import com.docutrace.user_service.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

/**
 * REST API for user registration, authentication, and administration.
 */
@RestController
@RequestMapping("/api")
public class UserController {

	private final UserService userService;

	public UserController(UserService userService) { this.userService = userService; }

	// Authentication & Registration

	@PostMapping("/auth/register")
	@ResponseStatus(HttpStatus.CREATED)
	public UserResponse register(@Valid @RequestBody UserRegistrationRequest request) {
		return userService.register(request);
	}

	@PostMapping("/auth/login")
	public AuthResponse login(@Valid @RequestBody AuthRequest request) {
		return userService.authenticate(request);
	}

	@PostMapping("/auth/refresh")
	public AuthResponse refresh(@Valid @RequestBody RefreshTokenRequest request) {
		return userService.refresh(request);
	}

	// Profile
	@GetMapping("/users/me")
	public UserResponse me(Authentication auth) {
		return userService.profile(auth.getName());
	}

	// Admin endpoints
	@GetMapping("/admin/users")
	@PreAuthorize("hasRole('ADMIN')")
	public List<UserResponse> all() { return userService.listAll(); }

	@PatchMapping("/admin/users/{id}/role")
	@PreAuthorize("hasRole('ADMIN')")
	public UserResponse updateRole(@PathVariable UUID id, @RequestBody Map<String, String> body) {
		UserRole role = UserRole.valueOf(body.get("role"));
		return userService.updateRole(id, role);
	}

	@PatchMapping("/admin/users/{id}/active")
	@PreAuthorize("hasRole('ADMIN')")
	public UserResponse setActive(@PathVariable UUID id, @RequestBody Map<String, Boolean> body) {
		return userService.setActive(id, body.getOrDefault("active", true));
	}

	@DeleteMapping("/admin/users/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> delete(@PathVariable UUID id) {
		userService.delete(id);
		return ResponseEntity.noContent().build();
	}
}
