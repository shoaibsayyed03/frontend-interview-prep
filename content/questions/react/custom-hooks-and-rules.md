---
title: "What are custom hooks and the Rules of Hooks?"
type: conceptual
difficulty: intermediate
tags: [custom-hooks, rules-of-hooks, reuse]
lastUpdated: 2026-08-01
---

**Custom hooks** extract stateful logic into reusable functions named `useSomething`. They call other hooks internally.

```js
function useDebouncedValue(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}
```

**Rules of Hooks**

1. Only call hooks at the top level — not inside loops, conditions, or nested functions.
2. Only call hooks from React functions (components or custom hooks).

Breaking order breaks React’s hook linked list.

**Custom hook vs normal function:** A custom hook may call hooks; a plain function may not.

**Rule of thumb**

- Extract when the same effect + state pattern repeats three times.
