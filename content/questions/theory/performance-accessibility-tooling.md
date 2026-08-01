---
title: "What tools measure performance, accessibility, and CLS?"
type: conceptual
difficulty: intermediate
tags: [lighthouse, cls, web-vitals, accessibility, performance]
lastUpdated: 2026-08-01
---

**Lighthouse** (Chrome DevTools, CI) — performance, accessibility, SEO, best practices scores.

**Web Vitals extension / RUM** — field data for LCP, INP, CLS in production.

**React DevTools Profiler** — component render time and commit frequency.

**Accessibility** — axe DevTools, Lighthouse a11y audit, manual keyboard/screen reader passes.

**Cumulative Layout Shift (CLS)** measures unexpected layout movement. Fix by reserving space for images/ads (`width`/`height`, aspect-ratio), avoiding inserting content above existing content, and preferring transform animations over layout-changing properties.

**Rule of thumb**

- Lab scores (Lighthouse) plus real-user monitoring — one without the other lies.
