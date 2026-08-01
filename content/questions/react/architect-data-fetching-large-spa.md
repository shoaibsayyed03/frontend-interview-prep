---
title: "How would you architect data fetching in a large SPA?"
type: scenario
difficulty: advanced
tags: [data-fetching, react-query, caching, architecture]
lastUpdated: 2026-08-01
---

**Split server state from UI state** — TanStack Query / RTK Query / SWR for remote data; local state or Zustand for UI-only concerns.

**Layers**

1. **API client** — base URL, auth headers, interceptors, typed responses.
2. **Query keys** — hierarchical (`['user', id]`, `['posts', { filter }]`) for cache and invalidation.
3. **Route loaders** (Next.js) or layout prefetch for critical data.
4. **Mutations** — optimistic updates + rollback; invalidate related queries on success.

**Cross-cutting:** global error/toast handling, retry policy, stale-while-revalidate, pagination/infinite query patterns.

**Rule of thumb**

- Do not copy server data into global Redux unless many unrelated features need the same normalized cache — let a query library own server state.
