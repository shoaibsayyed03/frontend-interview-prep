---
title: "What are common useEffect dependency array mistakes?"
type: tricky
difficulty: intermediate
tags: [useEffect, hooks, dependencies, stale-closure]
lastUpdated: 2026-08-01
---

The dependency array tells React when to re-run an effect. It looks simple, but most interview gaps show up in four places:

**Missing dependencies (stale closures):** The effect reads `count`, `props.id`, or a function from the render, but the array is `[]` or incomplete. The effect keeps seeing old values.

```js
useEffect(() => {
  const id = setInterval(() => {
    console.log(count); // stale if count not in deps
  }, 1000);
  return () => clearInterval(id);
}, []); // bug: count missing
```

**Infinite re-render loops:** The effect updates state on every run, and that state is in the dependency list (or causes a new object/function reference every render).

**Memory leaks (missing cleanup):** Subscriptions, timers, listeners, or pending fetches are not cleared in the effect cleanup. The component unmounts but work continues.

```js
useEffect(() => {
  const controller = new AbortController();
  fetch(url, { signal: controller.signal });
  return () => controller.abort();
}, [url]);
```

**Over-specifying dependencies:** Putting a new inline function or object in deps forces the effect to run every render without a real reason. Stabilize with `useCallback` / `useMemo`, or move logic inside the effect.

**Rule of thumb**

- List every value from the component scope that the effect reads.
- Prefer fixing deps over disabling the linter.
- Return cleanup for anything that outlives the effect run.
- Sometimes the best optimization is not using `useEffect` at all (event handlers, derived state, data libraries).
