---
title: "How do Next.js caching and middleware work?"
type: conceptual
difficulty: advanced
tags: [nextjs, caching, middleware, edge]
lastUpdated: 2026-08-01
---

**Caching (App Router)**

- `fetch` requests cached by default with configurable `cache` and `next.revalidate`.
- Full Route Cache and Data Cache — use `revalidatePath`, `revalidateTag`, or time-based ISR.
- Static pages served from CDN; dynamic routes opt in explicitly.

**Middleware (`middleware.ts`)**

- Runs at the edge before a request completes — auth redirects, geolocation, A/B buckets, rewriting headers.
- Keep middleware fast; no heavy DB work.

```ts
export function middleware(request) {
  if (!request.cookies.get("session")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}
```

**Rule of thumb**

- Document cache strategy per route; debug stale UI with cache tags before disabling cache globally.
