---
title: "How would you make a web app load in under 1 second?"
type: scenario
difficulty: advanced
tags: [performance, core-web-vitals, loading, interview-scenario]
lastUpdated: 2026-08-01
---

A sub-second load is a **budget across network, HTML, CSS, JS, and assets** — not one trick. I’d structure the answer in six layers and tie each to measurement.

**1. Ship less JavaScript**

- Minify, tree-shake, and remove dead code.
- Lazy-load non-critical UI with dynamic imports (`React.lazy`, `next/dynamic`).
- Analyze bundles (`@next/bundle-analyzer`, webpack analyzer) and drop or defer heavy dependencies.

**2. Prioritize critical rendering**

- Inline or prioritize **critical CSS** for above-the-fold content.
- Defer or async non-essential scripts to reduce render-blocking.
- Prefer **SSR/SSG or Server Components** (Next.js) so meaningful HTML arrives early instead of an empty shell waiting on JS.

**3. CDN and edge caching**

- Serve static assets and cacheable HTML from a **CDN** close to users.
- Cache API responses and pages at the edge where safe (ISR, stale-while-revalidate).
- Set correct `Cache-Control` and invalidation strategy.

**4. Optimize images**

- Use **WebP/AVIF**, responsive `srcset`, and explicit dimensions to avoid layout shift.
- Lazy-load below-the-fold images.
- In Next.js, use `next/image`; in other stacks, equivalent optimization pipelines.

**5. Preload key resources**

- Preload fonts, LCP image, and critical scripts with `<link rel="preload">`.
- Prefetch likely next routes (Next.js link prefetch, router preloading strategies).

**6. Measure, then tune**

- Lighthouse, WebPageTest, and **Core Web Vitals** in the field (LCP, INP, CLS).
- React Profiler for avoidable re-renders after first load.

**Wrap-up line for interviews**

“I’d reduce JS payload, get critical HTML/CSS painted fast, cache globally, optimize and lazy-load media, preload what the first view needs, and iterate using real metrics — not guesses.”

**Rule of thumb**

- Name one metric you’d improve first (usually **LCP** or **total blocking time**) and how you’d verify the win.
