package com.docutrace.user_service.exception;

/**
 * Thrown when a request violates a uniqueness or business constraint.
 */
public class ConflictException extends RuntimeException {
    public ConflictException(String message) { super(message); }
}
