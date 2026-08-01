---
title: "How do you share components across repos with Module Federation?"
type: system-design
difficulty: advanced
tags: [module-federation, webpack, micro-frontends, sharing]
lastUpdated: 2026-08-01
---

**Module Federation** (Webpack 5+) lets a **host** app load **remote** bundles at runtime and share dependencies (e.g. single React version via `shared` config).

**Flow**

1. Remote exposes `./Button` in `ModuleFederationPlugin`.
2. Host declares remote URL and imports `remote/Button`.
3. Shared config dedupes `react` / `react-dom` when versions align.

**Alternatives**

- Publish private npm packages for design system.
- Monorepo (pnpm workspaces) with internal packages — simpler versioning.

**Data across MFEs**

- Shell owns auth token; custom events; shared cookie; backend session — avoid ad hoc global variables.

**Rule of thumb**

- Federation for runtime integration; monorepo packages for compile-time sharing when one org owns all code.
