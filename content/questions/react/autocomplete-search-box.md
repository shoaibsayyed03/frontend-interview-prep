---
title: "How would you build an autocomplete search box in React?"
type: coding
difficulty: intermediate
tags: [autocomplete, debounce, combobox, machine-coding]
lastUpdated: 2026-08-01
---

**Pieces:** text input, debounced query, async suggestions, keyboard navigation (↑/↓/Enter/Escape), `aria-autocomplete`, `aria-activedescendant`.

```jsx
const debouncedQuery = useDebouncedValue(query, 300);

useEffect(() => {
  if (!debouncedQuery) return setItems([]);
  const ac = new AbortController();
  fetch(`/api/suggest?q=${debouncedQuery}`, { signal: ac.signal })
    .then((r) => r.json())
    .then(setItems)
    .catch(() => {});
  return () => ac.abort();
}, [debouncedQuery]);
```

**Optimize:** minimum character threshold; cache recent queries; highlight match substring.

**Rule of thumb**

- Use Radix/shadcn Combobox or Downshift for a11y; interview focus is debounce + abort + keyboard listbox pattern.
