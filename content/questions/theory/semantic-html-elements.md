---
title: "What are semantic HTML elements and why do they matter?"
type: conceptual
difficulty: beginner
tags: [html, accessibility, seo, semantics]
lastUpdated: 2026-08-01
---

Semantic tags describe **meaning**, not just appearance: `header`, `nav`, `main`, `article`, `section`, `footer`, `button`, `label`.

**Benefits**

- **Accessibility** — screen readers build landmarks and heading outlines.
- **SEO** — clearer document structure for crawlers.
- **Maintainability** — `<button>` gets keyboard and disabled behavior; `<div role="button">` does not by default.

Use one **`h1`** per page view; do not skip heading levels for styling — use CSS for size.

**Rule of thumb**

- Pick the element for what it **is**, then style it — not a div with a class name that copies a button.
