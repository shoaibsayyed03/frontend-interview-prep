---
title: "How do you prevent unnecessary re-renders in React?"
type: conceptual
difficulty: intermediate
tags: [performance, memo, useMemo, useCallback, rerender]
lastUpdated: 2026-08-01
---

A re-render means React called your component function again. It is not always a DOM update, but it costs CPU.

**Common tactics:**

1. **Colocate state** — keep state as low as possible so siblings do not re-render.
2. **`React.memo`** — skip re-render if props are shallow-equal (custom compare for deep props).
3. **`useMemo`** — cache expensive derived values.
4. **`useCallback`** — stable function reference when passing callbacks to memoized children.
5. **Stable keys and list virtualization** for large lists.
6. **Split context** — avoid one giant context value that changes often (see Redux vs Context).
7. **Move work out of render** — do not create new objects/functions in JSX props without memoization when children are memoized.

```jsx
const Child = React.memo(function Child({ onSave }) {
  return <button onClick={onSave}>Save</button>;
});

const onSave = useCallback(() => save(id), [id]);
return <Child onSave={onSave} />;
```

**Rule of thumb**

- Measure first (React DevTools Profiler). Memoize where props identity or heavy computation actually hurts.
