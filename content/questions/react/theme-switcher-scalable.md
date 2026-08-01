---
title: "How would you design a scalable theme switcher (light/dark mode)?"
type: scenario
difficulty: intermediate
tags: [theming, dark-mode, css-variables, design-tokens]
lastUpdated: 2026-08-01
---

**Tokens:** CSS variables on `:root` / `[data-theme="dark"]` — color, spacing, typography. Components consume `var(--color-surface)`, not hard-coded hex.

```css
:root { --bg: #fff; --text: #111; }
[data-theme="dark"] { --bg: #0a0a0a; --text: #f5f5f5; }
```

**React:** `ThemeProvider` with `theme` state; toggle sets `document.documentElement.dataset.theme` and persists to `localStorage`. Respect `prefers-color-scheme` on first visit.

**Large apps:** One global theme + optional density prop on components; avoid per-component one-off colors. Tailwind `dark:` variant or CSS vars both work — pick one system.

**SSR:** Inline script in `<head>` to set theme before paint and prevent flash (Next.js `next-themes` pattern).

**Rule of thumb**

- Theme is a platform concern (tokens + provider), not scattered `isDark ?` branches in every leaf component.
