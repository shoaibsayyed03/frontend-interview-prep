---
title: "Monolith vs micro-frontends — trade-offs?"
type: system-design
difficulty: advanced
tags: [micro-frontends, architecture, monolith, deployment]
lastUpdated: 2026-08-01
---

**Monolith frontend** — one repo, one deploy, shared design system and routing. Simplest until team and release cadence conflict.

**Micro-frontends (MFE)** — independently deployable UI slices (by domain team), composed in a shell app.

**Pros:** team autonomy, incremental upgrades, smaller blast radius per deploy.

**Cons:** duplicate dependencies, inconsistent UX, routing/orchestration complexity, slower initial load if not coordinated.

**vs iframe embeds:** iframes isolate CSS/JS but hurt integration, SEO, and UX; module federation or single-shell composition is usually preferred for product UI.

**Rule of thumb**

- Adopt MFE when organizational boundaries hurt more than technical overhead — not for fashion.
