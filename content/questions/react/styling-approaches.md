---
title: "CSS Modules vs Styled Components vs Tailwind — when to use what?"
type: conceptual
difficulty: intermediate
tags: [css-modules, styled-components, tailwind, styling]
lastUpdated: 2026-08-01
---

**CSS Modules** — scoped class names at build time; plain CSS files; great for teams that want design tokens + minimal runtime cost.

**Styled Components / CSS-in-JS** — colocate styles with components; dynamic theming; adds runtime (or compile-time with newer tooling).

**Tailwind** — utility classes; fast iteration; consistent spacing scale; needs discipline and `@apply` sparingly for repeated patterns.

**When**

- Design system + many apps → tokens + Modules or Tailwind preset.
- Highly dynamic theming per component → CSS-in-JS or CSS variables + Modules.
- Marketing speed + small team → Tailwind common choice.

**Rule of thumb**

- Pick one primary approach per app; avoid three styling systems in one codebase.
