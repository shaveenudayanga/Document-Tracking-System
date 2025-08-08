package com.docutrace.user_service.exception;

/**
 * Thrown when an expected entity is not found.
 */
public class NotFoundException extends RuntimeException {
    public NotFoundException(String message) { super(message); }
}
