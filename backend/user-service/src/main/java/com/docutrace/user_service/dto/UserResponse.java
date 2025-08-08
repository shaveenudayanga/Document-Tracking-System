package com.docutrace.user_service.dto;

import com.docutrace.user_service.model.UserRole;
import lombok.Builder;
import lombok.Data;

import java.time.Instant;
import java.util.UUID;

/**
 * Public facing user representation returned by APIs (excludes password).
 */
@Data
@Builder
public class UserResponse {
    private UUID id;
    private String name;
    private String email;
    private UserRole role;
    private boolean active;
    private Instant createdAt;
    private Instant updatedAt;
}
