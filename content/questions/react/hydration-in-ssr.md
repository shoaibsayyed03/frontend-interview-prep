---
title: "What is hydration in React SSR?"
type: conceptual
difficulty: intermediate
tags: [hydration, ssr, nextjs, performance]
lastUpdated: 2026-08-01
---

With SSR, the server sends **HTML** so content appears quickly (SEO and first paint). That HTML is static — no React event handlers yet.

**Hydration** is when client-side React attaches to existing DOM nodes, wires events, and aligns with the client component tree.

**Flow:**

1. Server renders HTML.
2. Browser displays it.
3. React JS loads, reconciles against the server output.
4. React attaches listeners and makes the UI interactive.

**Pitfalls**

- **Mismatch** between server HTML and client render → hydration errors.
- **Heavy hydration** delays interactivity (TTI) on slow devices.
- Avoid random IDs or `Date.now()` in SSR output without matching client.

**Rule of thumb**

- Same render output on server and client for hydrated regions.
- Prefer streaming SSR and selective client boundaries in Next.js App Router.
