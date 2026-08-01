---
title: "What is React and why use it beyond “a JS library”?"
type: conceptual
difficulty: beginner
tags: [react, jsx, components, ecosystem]
lastUpdated: 2026-08-01
---

React is a library for building UIs with **components**, **declarative** rendering, and **unidirectional data flow**.

Strong interview points:

- **Component model** — compose UI from reusable pieces with explicit props.
- **Declarative UI** — describe state → UI mapping; React updates the DOM.
- **Virtual DOM + reconciliation** — efficient updates via diffing (see reconciliation topic).
- **Ecosystem** — React DOM, hooks, concurrent features; frameworks like **Next.js** add routing, SSR/RSC, and bundling conventions.

**Advantages:** Large ecosystem, hiring pool, patterns for SPAs and hybrid rendering.

**Limitations at scale:** Client bundle size, state architecture choices, need discipline for performance and data fetching — often solved with framework tooling and splitting server/client boundaries.

**Rule of thumb**

- Mention one concrete project pattern (feature folders, design system atoms) not only definitions.
