---
title: "How does batching work in React 18?"
type: conceptual
difficulty: intermediate
tags: [batching, react-18, concurrent, setState]
lastUpdated: 2026-08-01
---

React **batches** multiple state updates into one re-render when they happen in the same event turn (click handler, promise microtask in React 18+, etc.).

```js
setCount((c) => c + 1);
setFlag((f) => !f);
// one re-render in React 18 automatic batching
```

**Concurrent features** (transitions, deferred updates) let React interrupt low-priority renders to keep input responsive.

```js
startTransition(() => setSearchResults(data));
```

**Rule of thumb**

- Do not rely on synchronous DOM reads immediately after multiple setStates — use `useEffect` / `useLayoutEffect` or flushSync (rare).
