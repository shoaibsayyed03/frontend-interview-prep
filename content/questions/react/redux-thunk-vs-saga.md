---
title: "Redux Thunk vs Redux Saga — when do you use which?"
type: conceptual
difficulty: advanced
tags: [redux, thunk, saga, middleware]
lastUpdated: 2026-08-01
---

**Thunk** — functions `(dispatch, getState) => {}` that dispatch synchronously or after async work. Simple, inline async/await in action creators.

**Saga** — generator-based middleware; declarative **effects** (`takeEvery`, `fork`, `call`, `put`) for complex flows — debounced search, cancellation, race handling.

| | Thunk | Saga |
|---|--------|------|
| Learning curve | Low | High |
| Complex orchestration | Gets messy | Strong |
| Testing | Mock dispatch | Test generator steps |

Modern apps often use **RTK Query** or **TanStack Query** instead of either for server state.

**Rule of thumb**

- Thunk for most CRUD async; Saga when you need cancellation/races at scale — or avoid both with a data-fetching library.
