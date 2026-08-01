---
title: "How would you implement live search filtering for large datasets in React?"
type: scenario
difficulty: intermediate
tags: [search, filtering, debounce, virtualization]
lastUpdated: 2026-08-01
---

**Small/medium lists (client-side):** Debounce input; memoize filtered list with `useMemo`; avoid filtering inside render without memo.

**Large lists:** Do not filter 100k rows on main thread every keystroke — **server search** with debounced query + abort prior request; or Web Worker for in-memory index.

**State split:** `inputValue` (instant) vs `debouncedQuery` (API/filter driver). Show stale results with loading indicator while fetching.

**With API:** `?q=` param, cursor pagination on results; React Query with `keepPreviousData` for smooth UX.

**Rule of thumb**

- If filtering takes >16ms, move work off the critical path (server, worker, or pre-built index).
