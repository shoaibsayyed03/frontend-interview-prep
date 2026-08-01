---
title: "What are common REST HTTP methods and when do you use them?"
type: conceptual
difficulty: beginner
tags: [rest, http, api]
lastUpdated: 2026-08-01
---

| Method | Typical use | Idempotent |
|--------|-------------|------------|
| GET | Read resource | Yes |
| POST | Create or non-idempotent action | No |
| PUT | Replace resource at URL | Yes |
| PATCH | Partial update | Often |
| DELETE | Remove resource | Yes |

**Status codes:** 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 429 Too Many Requests.

**Frontend:** map methods to fetch/axios; use GET for reads (cacheable); POST/PATCH/DELETE for mutations with error handling and idempotency keys on payments.

**Rule of thumb**

- REST is a convention — design clear nouns (resources) and consistent error bodies, not only verb choice.
