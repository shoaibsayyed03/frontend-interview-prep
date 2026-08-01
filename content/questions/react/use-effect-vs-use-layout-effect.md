---
title: "What is the difference between useEffect and useLayoutEffect?"
type: conceptual
difficulty: intermediate
tags: [useEffect, useLayoutEffect, hooks, rendering]
lastUpdated: 2026-08-01
---

Both run after render, but at different times in the browser pipeline.

**`useEffect`** runs after paint. The user can see the updated UI before the effect runs. Use it for data fetching, subscriptions, logging, and most side effects.

**`useLayoutEffect`** runs after DOM updates but before the browser paints. Use it when you must measure the DOM or synchronously change layout before the user sees a flash (e.g. tooltip position, scroll sync).

```js
useLayoutEffect(() => {
  const height = ref.current.getBoundingClientRect().height;
  setMeasured(height);
}, []);
```

**Rule of thumb**

- Default to `useEffect`.
- Reach for `useLayoutEffect` only when you see visual flicker or need synchronous DOM reads/writes before paint.
- `useLayoutEffect` can block painting — do not put slow work there.
