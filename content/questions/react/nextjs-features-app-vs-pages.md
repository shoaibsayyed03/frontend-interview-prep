---
title: "What are key Next.js features and App Router vs Pages Router?"
type: conceptual
difficulty: intermediate
tags: [nextjs, app-router, pages-router, routing]
lastUpdated: 2026-08-01
---

**Next.js** extends React with file-based routing, SSR/SSG/ISR, image optimization, and built-in data conventions.

**Pages Router (`pages/`)** — `getServerSideProps`, `getStaticProps`, `_app`, mature ecosystem.

**App Router (`app/`)** — React Server Components by default, nested layouts, loading/error UI, streaming, colocated `page.tsx` / `layout.tsx`.

**Key features**

- Routing and layouts
- Server and client component boundaries
- Metadata API for SEO
- Image and font optimization
- Middleware at the edge

**Rule of thumb**

- New projects: App Router unless blocked by legacy plugin ecosystem.
