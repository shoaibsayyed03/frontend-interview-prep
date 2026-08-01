---
title: "What are synthetic events and React portals?"
type: conceptual
difficulty: intermediate
tags: [synthetic-events, portals, dom, events]
lastUpdated: 2026-08-01
---

**Synthetic events** wrap native browser events in a cross-browser `SyntheticEvent` with the same interface (`preventDefault`, `stopPropagation`). React attaches listeners at the root and delegates for performance and consistency.

**Portals** render children into a different DOM node (e.g. modal into `document.body`) while keeping React tree context (events bubble in React tree, not only DOM hierarchy).

```jsx
createPortal(<Modal />, document.body);
```

Use portals for modals, tooltips, and overlays that must escape `overflow: hidden` ancestors.

**Rule of thumb**

- Use portals when CSS stacking context traps UI.
- Synthetic events still map to native behavior — call `preventDefault` when needed.
