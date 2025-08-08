package com.docutrace.user_service.exception;

/**
 * Thrown when a user lacks privileges to perform an action.
 */
public class ForbiddenException extends RuntimeException {
    public ForbiddenException(String message) { super(message); }
}
