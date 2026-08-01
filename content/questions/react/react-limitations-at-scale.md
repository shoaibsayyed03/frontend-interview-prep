---
title: "What are limitations of React in large-scale apps?"
type: system-design
difficulty: advanced
tags: [architecture, scale, performance, react]
lastUpdated: 2026-08-01
---

React does not prescribe routing, data layer, or folder structure — teams must choose conventions.

**Common challenges:**

- **State sprawl** — prop drilling vs over-globalized context vs many stores.
- **Bundle size** — client JS for large dashboards; mitigated by code splitting, RSC, and route-based loading.
- **Re-render cost** — deep trees re-run often without memoization and colocation.
- **Data fetching** — ad hoc `useEffect` fetches lead to waterfalls; prefer dedicated libraries or server components.
- **Consistency** — SSR/hydration mismatches, duplicate server/client logic.
- **Org scale** — design systems, micro-frontends, and shared dependency versions need explicit architecture.

**Rule of thumb**

- Scale is solved with architecture (boundaries, server/client split, observability), not only micro-optimizations.
