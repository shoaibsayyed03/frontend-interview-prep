---
title: "How do you fetch data with useEffect?"
type: conceptual
difficulty: beginner
tags: [data-fetching, useEffect, abort-controller]
lastUpdated: 2026-08-01
---

Classic pattern: run fetch when `id` or `url` changes, handle loading/error state, abort on cleanup to avoid races.

```jsx
useEffect(() => {
  const controller = new AbortController();
  let cancelled = false;

  async function load() {
    setLoading(true);
    try {
      const res = await fetch(`/api/items/${id}`, {
        signal: controller.signal,
      });
      const data = await res.json();
      if (!cancelled) setItems(data);
    } catch (e) {
      if (!cancelled && e.name !== "AbortError") setError(e);
    } finally {
      if (!cancelled) setLoading(false);
    }
  }

  load();
  return () => {
    cancelled = true;
    controller.abort();
  };
}, [id]);
```

Modern apps often prefer **React Query / SWR**, **Server Components**, or **route loaders** to avoid effect waterfalls.

**Rule of thumb**

- Always cancel or ignore stale responses when deps change.
