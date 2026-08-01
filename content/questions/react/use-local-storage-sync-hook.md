---
title: "How would you create a hook that syncs state with localStorage?"
type: coding
difficulty: intermediate
tags: [hooks, localStorage, hydration, cross-tab]
lastUpdated: 2026-08-01
---

**SSR/hydration:** Initialize with default on server; read storage in `useEffect` after mount to avoid mismatch.

```jsx
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(key);
      if (raw != null) setValue(JSON.parse(raw));
    } catch {
      localStorage.removeItem(key);
    }
  }, [key]);

  const setStored = useCallback(
    (next) => {
      setValue((prev) => {
        const resolved = typeof next === "function" ? next(prev) : next;
        try {
          localStorage.setItem(key, JSON.stringify(resolved));
        } catch {
          /* quota exceeded — trim or warn */
        }
        return resolved;
      });
    },
    [key],
  );

  useEffect(() => {
    function onStorage(e) {
      if (e.key === key && e.newValue != null) {
        setValue(JSON.parse(e.newValue));
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [key]);

  return [value, setStored];
}
```

**Edge cases:** Invalid JSON, private mode, quota — fall back to in-memory state. `storage` event syncs **other tabs**, not the same tab (use custom event or shared worker for same-tab broadcast if needed).

**Rule of thumb**

- Never store secrets in localStorage; use httpOnly cookies for auth tokens.
