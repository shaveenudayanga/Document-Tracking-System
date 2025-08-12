# ADR 0001: User IDs and Cross-Service References

Date: 2025-08-12

Status: Accepted

## Context

The ERD exported from dbdiagram shows a monolithic relational design with integer PKs and database-level foreign keys referencing the User table.

Our codebase follows a microservice architecture where `user-service` owns its data model. Other services should not directly join or enforce foreign keys to the user database.

## Decision

- `user-service` uses UUID as the canonical user identifier (column `id` in table `users`).
- Other services must treat the user ID as an opaque string/UUID and must not create database-level foreign keys into the `user-service` database.
- Cross-service relationships are enforced at the application level via API calls or asynchronous events, not via cross-database FKs.
- The ER diagram will be treated as a conceptual model; implementation differs per service boundary.

## Rationale

- UUIDs are globally unique, avoiding ID collisions across services/environments and simplifying merges and imports.
- Decoupling storage schemas prevents tight coupling and cascading failures caused by cross-service DB constraints.
- Enables independent scaling, data ownership, and evolution of each microservice schema.

## Consequences

- Other services must use `UUID` (string) fields for `userId` references instead of integers.
- Referential integrity must be validated through the `user-service` API or domain events (e.g., on user created/updated/deleted).
- The ERD used for documentation should note microservice boundaries and avoid implying cross-service hard FKs.

## Implementation Notes

- `user-service` primary key: `users.id` (UUID), with `email` unique.
- Use `GET /api/users/{id}` or `GET /api/users/me` for lookups.
- Consider publishing user events to a message bus if/when other services need to react to user lifecycle changes.
