---
title: "How does event delegation work in the DOM?"
type: conceptual
difficulty: beginner
tags: [dom, events, bubbling]
lastUpdated: 2026-08-01
---

Attach **one listener** on a parent; use `event.target` (or `closest`) to handle clicks on many children — including dynamically added nodes.

```js
list.addEventListener("click", (e) => {
  const row = e.target.closest("[data-id]");
  if (!row || !list.contains(row)) return;
  handleRowClick(row.dataset.id);
});
```

**Phases:** capture → target → bubble. Delegation usually listens on bubble phase.

**React:** Synthetic events delegate at the root; same idea for performance and dynamic lists.

**Rule of thumb**

- Delegate on stable containers for long lists; avoid per-row listeners that re-bind on every render.
