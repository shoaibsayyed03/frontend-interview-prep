---
title: "What is React Strict Mode?"
type: conceptual
difficulty: beginner
tags: [strict-mode, development, hooks]
lastUpdated: 2026-08-01
---

Strict Mode is a development-only wrapper that helps find unsafe lifecycles, legacy APIs, and side effects that are not resilient to remounting.

In React 18+, Strict Mode **double-invokes** certain functions in development (render, `useState` initializers, `useMemo`, `useEffect` setup/cleanup) to surface missing cleanup and non-idempotent effects.

It does not run twice in production.

**Rule of thumb**

- Effects must clean up subscriptions and tolerate remount.
- Treat Strict Mode warnings as real bugs, not noise.
