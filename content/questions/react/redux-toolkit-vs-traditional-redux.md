---
title: "What are Redux Toolkit advantages over traditional Redux?"
type: conceptual
difficulty: intermediate
tags: [redux, redux-toolkit, state-management]
lastUpdated: 2026-08-01
---

**Redux Toolkit (RTK)** reduces boilerplate and encodes best practices:

- **`createSlice`** — reducers + actions in one place; Immer for “mutable” draft logic.
- **`configureStore`** — sensible defaults, DevTools, middleware.
- **`createAsyncThunk`** — standardized async + pending/fulfilled/rejected.
- **RTK Query** — caching, invalidation, and data fetching built in.

Traditional Redux required manual action types, switch reducers, immutable spreads, and separate thunk wiring.

**Rule of thumb**

- Greenfield Redux → RTK; mention legacy apps may still use hand-written reducers.
