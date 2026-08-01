---
title: "Next.js Link vs anchor, Image vs img, and dynamic routes?"
type: conceptual
difficulty: intermediate
tags: [nextjs, link, image, dynamic-routes]
lastUpdated: 2026-08-01
---

**`<Link>` vs `<a>`**

- `next/link` client-navigates without full page reload, prefetches routes in viewport.
- Plain `<a>` causes full document navigation — use for external URLs.

**`<Image>` vs `<img>`**

- `next/image` serves responsive sizes, lazy loading, modern formats, and avoids layout shift when `width`/`height` set.
- Raw `<img>` is fine for static emails or when optimization pipeline is not available.

**Dynamic routes**

- App Router: `app/products/[id]/page.tsx` — `params` prop (async in newer Next versions).
- Pages Router: `pages/products/[id].js` — `getStaticPaths` + `getStaticProps` or SSR.

**Rule of thumb**

- Internal navigation → `Link`. User-uploaded or CMS images → configured `Image` domains.
