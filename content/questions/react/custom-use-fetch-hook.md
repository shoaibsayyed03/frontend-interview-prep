---
title: "How would you implement a custom useFetch hook in React?"
type: coding
difficulty: intermediate
tags: [hooks, data-fetching, useEffect, abort-controller]
lastUpdated: 2026-08-01
---

Return `{ data, error, loading, refetch }` and accept a **URL + options** or a **lazy `enabled` flag** so the hook works across components.

```jsx
function useFetch(url, { enabled = true } = {}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(res.statusText);
      setData(await res.json());
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (!enabled) return;
    const controller = new AbortController();
    setLoading(true);
    fetch(url, { signal: controller.signal })
      .then((r) => r.json())
      .then(setData)
      .catch((e) => {
        if (e.name !== "AbortError") setError(e);
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [url, enabled]);

  return { data, error, loading, refetch };
}
```

**Reusability:** Parameterize URL/key; reset state when `url` changes; abort on cleanup to avoid stale responses.

**Production:** Prefer React Query/SWR — caching, deduping, and retries — and treat `useFetch` as the interview skeleton.

**Rule of thumb**

- Always abort or ignore stale requests when dependencies change; expose `refetch` for mutations that should refresh the same resource.
