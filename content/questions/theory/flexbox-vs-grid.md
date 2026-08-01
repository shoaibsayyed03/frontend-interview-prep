---
title: "How do Flexbox and CSS Grid differ — when do you use each?"
type: conceptual
difficulty: beginner
tags: [css, flexbox, grid, layout]
lastUpdated: 2026-08-01
---

**Flexbox** — one-dimensional layout (row **or** column). Great for nav bars, toolbars, centering, distributing space along a single axis.

**Grid** — two-dimensional rows **and** columns. Great for page layouts, dashboards, card galleries with aligned tracks.

| | Flexbox | Grid |
|---|---------|------|
| Axes | 1D | 2D |
| Content-driven | Strong (`flex-wrap`) | Strong (`auto-fit` minmax) |
| Alignment | `justify-content`, `align-items` | `place-items`, track sizing |

**Rule of thumb**

- Component internals often flex; page-level regions often grid — combine both.
