---
title: "What are React Server Components?"
type: conceptual
difficulty: advanced
tags: [rsc, server-components, nextjs, rendering]
lastUpdated: 2026-08-01
---

**React Server Components (RSC)** run on the server only. They can fetch data and read files directly, and they do not ship their component logic to the client bundle (client receives a serialized payload to merge into the tree).

They differ from:

- **CSR** — everything runs in the browser.
- **SSR** — server renders HTML; client still hydrates interactive client components.
- **Traditional SSR components** — still shipped as JS for hydration if they are client components.

RSC compose with **Client Components** (marked with `"use client"`) that handle interactivity, effects, and browser APIs.

**Rule of thumb**

- Server Components for data-heavy, non-interactive UI.
- Client Components for state, effects, event handlers.
- Frameworks like Next.js App Router integrate RSC by default.
