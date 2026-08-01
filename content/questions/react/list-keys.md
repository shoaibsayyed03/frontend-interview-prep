---
title: "Why are unique keys important in React lists?"
type: tricky
difficulty: beginner
tags: [keys, lists, reconciliation, state]
lastUpdated: 2026-08-01
---

Keys tell React which list item matches which previous instance during reconciliation.

**Stable id from data** — correct for reorder, insert, delete.

**Array index as key** — breaks when list reorders or filters; component state can stick to the wrong row.

```jsx
{items.map((item) => (
  <Row key={item.id} item={item} />
))}
```

If you skip keys, React warns and reconciliation quality degrades.

**Rule of thumb**

- Keys must be stable among siblings, not globally unique forever.
- Do not generate random keys on every render.
