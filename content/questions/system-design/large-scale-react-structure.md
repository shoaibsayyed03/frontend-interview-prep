---
title: "How do you structure a large-scale React app?"
type: system-design
difficulty: advanced
tags: [architecture, folder-structure, scalability, atomic-design]
lastUpdated: 2026-08-01
---

Common patterns:

**Feature folders** — `features/checkout`, `features/catalog` with components, hooks, API, tests colocated.

**Shared UI** — `components/ui` design system (atoms/molecules), no business logic.

**App shell** — routing, providers, layout in `app/` or `pages/`.

**Boundaries**

- Server vs client components (Next.js) at leaves that need interactivity.
- Data layer: server fetch + React Query for client cache.
- Avoid cross-feature imports; use public feature APIs.

**Atomic Design** helps separate presentational atoms/molecules from feature organisms.

**Rule of thumb**

- Optimize for team ownership and clear import direction: features → shared, never the reverse.
