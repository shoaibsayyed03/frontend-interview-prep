---
title: "When do you use Tailwind vs SCSS?"
type: conceptual
difficulty: beginner
tags: [tailwind, scss, css, tooling]
lastUpdated: 2026-08-01
---

**Tailwind** — utility-first; rapid UI iteration; enforces spacing/type scale; great with component libraries and small teams shipping fast. Trade-off: verbose JSX class strings; needs design tokens config for large brands.

**SCSS** — variables, nesting, mixins; fits traditional component CSS files and design systems authored in Sass. Trade-off: naming discipline (BEM) and unused CSS unless purged.

**Choose Tailwind when** you want consistent utilities, minimal context switching, and colocation with JSX.

**Choose SCSS when** designers deliver Sass tokens, legacy codebase, or complex mixins already invested.

Many teams use **both**: Tailwind for layout/spacing, SCSS/CSS modules for third-party overrides.

**Rule of thumb**

- Optimize for team workflow and design system ownership, not ideology.
