---
title: "What are SSR, CSR, SSG, and ISR trade-offs?"
type: scenario
difficulty: intermediate
tags: [ssr, csr, ssg, isr, rendering]
lastUpdated: 2026-08-01
---

| Strategy | When HTML is built | Typical use |
|----------|-------------------|-------------|
| **CSR** | Browser | Dashboards behind login, highly interactive apps |
| **SSR** | Each request on server | Personalized or fresh data (account pages) |
| **SSG** | Build time | Marketing, docs, stable catalog pages |
| **ISR** | SSG + revalidate on interval | E-commerce listings — fast CDN + periodic refresh |

**E-commerce example:** Product **detail** with stable SEO → SSG or ISR. **Cart / checkout** → CSR or SSR with auth. **Home promos** → ISR so hero deals update without full rebuilds.

**Rule of thumb**

- Match strategy to freshness, SEO, and personalization — not one mode for the whole site.
