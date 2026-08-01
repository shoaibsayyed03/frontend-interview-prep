---
title: "What are optimistic UI updates?"
type: conceptual
difficulty: intermediate
tags: [optimistic-ui, ux, mutations, state]
lastUpdated: 2026-08-01
---

**Optimistic UI** updates the interface immediately as if the server request succeeded, then rolls back or reconciles if the request fails.

Example: like button toggles at once; on error, revert and show toast.

Libraries (React Query, Relay) provide mutation helpers with `onMutate`, rollback, and cache invalidation.

**Trade-offs**

- Better perceived speed.
- Requires conflict handling and clear error recovery.

**Rule of thumb**

- Use for low-risk, reversible actions; avoid for payments without confirmation.
