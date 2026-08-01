---
title: "How would you implement accessibility at scale in a React application?"
type: scenario
difficulty: advanced
tags: [a11y, wcag, testing, design-system]
lastUpdated: 2026-08-01
---

**Reusable primitives:** Design-system components with built-in labels, focus rings, keyboard handlers — `Button`, `Dialog`, `Combobox` (Radix/shadcn patterns). Ban raw `<div onClick>` for actions.

**Enforcement**

- ESLint `eslint-plugin-jsx-a11y` in CI.
- Storybook a11y addon + axe checks on PRs.
- Required focus order and `aria-*` on custom widgets.

**Testing:** Automated axe / Playwright; manual NVDA/VoiceOver passes for critical flows (checkout, login).

**Process:** a11y acceptance criteria on tickets; contrast tokens in theme; document focus trap rules for modals.

**Rule of thumb**

- Fix accessibility in the design system once, inherit everywhere — not per-feature audits after launch.
