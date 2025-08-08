package com.docutrace.user_service.security;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

/**
 * Binds JWT related configuration properties from application.yml (security.jwt.*)
 */
@Component
@ConfigurationProperties(prefix = "security.jwt")
public class JwtProperties {
    private String secret;
    private int expirationAccessMinutes;
    private int expirationRefreshDays;

    public String getSecret() { return secret; }
    public void setSecret(String secret) { this.secret = secret; }
    public int getExpirationAccessMinutes() { return expirationAccessMinutes; }
    public void setExpirationAccessMinutes(int expirationAccessMinutes) { this.expirationAccessMinutes = expirationAccessMinutes; }
    public int getExpirationRefreshDays() { return expirationRefreshDays; }
    public void setExpirationRefreshDays(int expirationRefreshDays) { this.expirationRefreshDays = expirationRefreshDays; }
}
