---
title: "How do you manage caching for server data in React?"
type: conceptual
difficulty: intermediate
tags: [caching, react-query, swr, data-fetching]
lastUpdated: 2026-08-01
---

Client-side caching stores fetched data by key, dedupes in-flight requests, and revalidates in the background.

**Patterns**

- **TanStack Query / SWR** — stale-while-revalidate, focus refetch, mutation invalidation.
- **HTTP cache headers** — `Cache-Control`, ETags on API responses.
- **Next.js** — `fetch` caching, `revalidate`, tag-based revalidation in App Router.

```js
const { data } = useQuery({
  queryKey: ["user", id],
  queryFn: () => fetchUser(id),
  staleTime: 60_000,
});
```

**Rule of thumb**

- Separate **server cache** (CDN/framework) from **client cache** (in-memory query library).
