package com.docutrace.user_service.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * Login request DTO capturing credentials.
 */
@Data
public class AuthRequest {
    @Email
    @NotBlank
    private String email;

    @NotBlank
    private String password;
}
