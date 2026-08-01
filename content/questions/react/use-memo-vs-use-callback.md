---
title: "When should you use useMemo vs useCallback?"
type: conceptual
difficulty: intermediate
tags: [useMemo, useCallback, performance, hooks]
lastUpdated: 2026-08-01
---

Both cache results between renders when dependencies are unchanged.

**`useMemo(fn, deps)`** — caches the **return value** of `fn` (objects, arrays, numbers from heavy computation).

```js
const sorted = useMemo(() => expensiveSort(items), [items]);
```

**`useCallback(fn, deps)`** — caches the **function identity** itself (shorthand for `useMemo(() => fn, deps)`).

```js
const onClick = useCallback(() => submit(id), [id]);
```

**Real use cases**

- `useMemo`: expensive filtering/sorting, stable object props for memoized children.
- `useCallback`: handlers passed to `React.memo` children, dependencies of other hooks.

**Rule of thumb**

- Do not wrap everything — memoization has a cost.
- Fix architecture (smaller components, less lifted state) before sprinkling hooks.
