package com.docutrace.user_service.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

/**
 * Request for token refresh operation.
 */
@Data
public class RefreshTokenRequest {
    @NotBlank
    private String refreshToken;
}
