---
title: "How would you build a nested folder tree with parent-child checkboxes?"
type: coding
difficulty: advanced
tags: [tree, checkboxes, machine-coding, recursion]
lastUpdated: 2026-08-01
---

**Model:** tree nodes `{ id, name, children }`. Selection state: `Set<id>` or map of `checked | indeterminate`.

**Rules**

- Check parent → check all descendants.
- Uncheck any child → uncheck ancestors.
- All children checked → parent checked; some → parent **indeterminate**.

```jsx
function toggleNode(tree, id, checked, selected, setSelected) {
  const ids = collectDescendantIds(tree, id);
  const next = new Set(selected);
  ids.forEach((i) => (checked ? next.add(i) : next.delete(i)));
  setSelected(next);
}
```

**UI:** recursive component; indent with `paddingInlineStart: depth * 16px`; preserve expand/collapse state separately from selection.

**Rule of thumb**

- Normalize to a flat `Set` for O(1) lookup; compute indeterminate on render from children.
