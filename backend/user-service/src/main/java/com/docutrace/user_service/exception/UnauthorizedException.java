package com.docutrace.user_service.exception;

/**
 * Thrown when authentication fails or token invalid.
 */
public class UnauthorizedException extends RuntimeException {
    public UnauthorizedException(String message) { super(message); }
}
