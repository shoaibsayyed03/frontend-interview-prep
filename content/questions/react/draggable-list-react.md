---
title: "How would you implement a draggable list in React?"
type: coding
difficulty: intermediate
tags: [drag-and-drop, dnd-kit, performance, lists]
lastUpdated: 2026-08-01
---

**State:** ordered array of item ids (or items). On drop, compute new index and `setItems(reorder(items, from, to))`.

**Libraries:** `@dnd-kit/core` + `@dnd-kit/sortable` (accessible, keyboard support) or `react-beautiful-dnd` (legacy). HTML5 DnD API works for simple cases but a11y is harder.

```jsx
function onDragEnd(event) {
  const { active, over } = event;
  if (!over || active.id === over.id) return;
  setItems((items) => {
    const oldIndex = items.findIndex((i) => i.id === active.id);
    const newIndex = items.findIndex((i) => i.id === over.id);
    return arrayMove(items, oldIndex, newIndex);
  });
}
```

**Performance:** Memoize row components; avoid re-rendering the full list — only active item needs transform during drag. For long lists, virtualize + sortable together (measure row height).

**Rule of thumb**

- Persist order to the server on drop (debounced PATCH) or on explicit Save; optimistic UI with rollback on failure.
