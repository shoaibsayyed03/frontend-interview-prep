---
title: "Feature-based vs type-based folder structure — which do you use?"
type: conceptual
difficulty: intermediate
tags: [architecture, folder-structure, scalability]
lastUpdated: 2026-08-01
---

**Type-based:** `components/`, `hooks/`, `services/` — easy to find “all hooks” but features sprawl across folders.

**Feature-based:** `features/checkout/`, `features/catalog/` — components, hooks, API, and tests colocated by product area.

**Hybrid (common at scale):** features own product code; `shared/ui` for design system; `app/` for routing and providers.

Import rule: **features → shared**, not shared importing features.

**Rule of thumb**

- Start feature-based when more than one developer touches the same product areas — matches ownership and reduces cross-folder churn.
