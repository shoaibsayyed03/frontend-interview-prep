---
title: "How do the CSS box model and specificity work?"
type: conceptual
difficulty: beginner
tags: [css, box-model, specificity]
lastUpdated: 2026-08-01
---

**Box model:** content → padding → border → margin. `box-sizing: border-box` includes padding/border in width/height (common reset).

**Specificity** (highest wins): inline style > `#id` > `.class`, `[attr]`, `:pseudo` > element. `!important` overrides normal cascade (avoid in app CSS).

Example: `div.nav` (0,1,1) beats `.nav` (0,1,0).

**Cascade order:** origin → importance → specificity → source order.

**Rule of thumb**

- Prefer single-class or data-attribute selectors in components; fight specificity wars with design tokens, not more `!important`.
