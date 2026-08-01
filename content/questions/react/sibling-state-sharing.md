---
title: "How do you share data between sibling components?"
type: conceptual
difficulty: beginner
tags: [state, lifting-state, context, siblings]
lastUpdated: 2026-08-01
---

Siblings do not talk directly. Common patterns:

1. **Lift state up** to the closest common parent; pass props down to each sibling.
2. **Context** when many deep consumers need the same value.
3. **Global / URL state** — query params for filters, store for app-wide UI.
4. **Event bus or custom hooks** — rare; prefer explicit parent or store.

```jsx
function Parent() {
  const [filter, setFilter] = useState("");
  return (
    <>
      <Sidebar filter={filter} onFilter={setFilter} />
      <Results filter={filter} />
    </>
  );
}
```

**Rule of thumb**

- Lift state before reaching for global stores.
