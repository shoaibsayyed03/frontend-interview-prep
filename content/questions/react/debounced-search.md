---
title: "How would you build a debounced search in React?"
type: coding
difficulty: intermediate
tags: [debounce, search, hooks, performance]
lastUpdated: 2026-08-01
---

Keep immediate input state for the field; debounce the value that triggers API calls.

```jsx
function useDebouncedValue(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);
  return debounced;
}

function Search() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebouncedValue(query);

  useEffect(() => {
    if (!debouncedQuery) return;
    fetch(`/api/search?q=${encodeURIComponent(debouncedQuery)}`);
  }, [debouncedQuery]);

  return (
    <input value={query} onChange={(e) => setQuery(e.target.value)} />
  );
}
```

Cancel in-flight fetches with `AbortController` when `debouncedQuery` changes.

**Rule of thumb**

- Debounce user input; throttle high-frequency scroll/resize if needed.
