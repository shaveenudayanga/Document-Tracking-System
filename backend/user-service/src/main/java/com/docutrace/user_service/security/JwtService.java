package com.docutrace.user_service.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Map;
import java.util.UUID;

/**
 * Utility service for creating and validating JWT access & refresh tokens.
 */
@Service
public class JwtService {

    private final JwtProperties props;
    private final Key key;

    public JwtService(JwtProperties props) {
        this.props = props;
        byte[] bytes;
        // Accept raw or base64 encoded secret transparently.
        try {
            bytes = Decoders.BASE64.decode(props.getSecret());
        } catch (Exception e) {
            bytes = props.getSecret().getBytes();
        }
        // Ensure minimum 256-bit length (32 bytes). If shorter, expand deterministically.
        if (bytes.length < 32) {
            byte[] expanded = new byte[32];
            for (int i = 0; i < expanded.length; i++) {
                expanded[i] = bytes[i % bytes.length];
            }
            bytes = expanded;
        }
        this.key = Keys.hmacShaKeyFor(bytes);
    }

    public String generateAccessToken(String subject, Map<String, Object> claims) {
        Instant now = Instant.now();
        return Jwts.builder()
                .setId(UUID.randomUUID().toString())
                .setSubject(subject)
                .addClaims(claims)
                .setIssuedAt(Date.from(now))
                .setExpiration(Date.from(now.plus(props.getExpirationAccessMinutes(), ChronoUnit.MINUTES)))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public String generateRefreshToken(String subject) {
        Instant now = Instant.now();
        return Jwts.builder()
                .setId(UUID.randomUUID().toString())
                .setSubject(subject)
                .setIssuedAt(Date.from(now))
                .setExpiration(Date.from(now.plus(props.getExpirationRefreshDays(), ChronoUnit.DAYS)))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public Jws<Claims> parse(String token) {
        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
    }

    public boolean isExpired(String token) {
        try {
            return parse(token).getBody().getExpiration().before(new Date());
        } catch (JwtException e) {
            return true;
        }
    }
}
