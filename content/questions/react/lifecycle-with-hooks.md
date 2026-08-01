---
title: "How do you map class lifecycle methods in functional components?"
type: conceptual
difficulty: intermediate
tags: [lifecycle, useEffect, hooks]
lastUpdated: 2026-08-01
---

**Mount (run once):**

```js
useEffect(() => {
  // componentDidMount
  return () => {
    // componentWillUnmount
  };
}, []);
```

**Update when specific values change:**

```js
useEffect(() => {
  // componentDidUpdate for [userId]
}, [userId]);
```

**Always run after every render (rare):** omit the dependency array — usually a smell; prefer explicit deps.

There is no direct replacement for `getDerivedStateFromProps`; derive values during render or use `key` to reset state when inputs change.

**Rule of thumb**

- One effect can combine mount + unmount via cleanup.
- Split unrelated side effects into separate `useEffect` calls.
