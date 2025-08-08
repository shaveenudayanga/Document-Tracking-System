package com.docutrace.user_service.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.util.UUID;

/**
 * Entity representing an application user stored in PostgreSQL.
 * Holds authentication (email, password) and authorization (role, active) data.
 */
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
@Entity
public class User {

	/** Primary identifier (UUID). */
	@Id
	@Column(name = "id", nullable = false, updatable = false, columnDefinition = "UUID")
	private UUID id;

	/** Human friendly display name. */
	@Column(nullable = false, length = 120)
	private String name;

	/** Unique email used as username. */
	@Column(nullable = false, unique = true, length = 180)
	private String email;

	/** BCrypt hashed password. */
	@Column(nullable = false, length = 200)
	private String password;

	/** Role enumerating user privileges. */
	@Enumerated(EnumType.STRING)
	@Column(nullable = false, length = 40)
	private UserRole role;

	/** Indicates whether user account is active (soft disable flag). */
	@Column(nullable = false)
	private boolean active = true;

	/** Creation timestamp auto-managed by Hibernate. */
	@CreationTimestamp
	@Column(nullable = false, updatable = false)
	private Instant createdAt;

	/** Last update timestamp auto-managed by Hibernate. */
	@UpdateTimestamp
	private Instant updatedAt;
}
