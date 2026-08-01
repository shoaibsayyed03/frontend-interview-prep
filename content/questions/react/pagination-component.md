---
title: "How would you build a pagination component in React?"
type: coding
difficulty: intermediate
tags: [pagination, machine-coding, ui]
lastUpdated: 2026-08-01
---

**State:** `page` (1-based or 0-based), `pageSize`, `totalCount` from server or client slice.

```jsx
function Pagination({ page, pageCount, onPageChange }) {
  return (
    <nav aria-label="Pagination">
      <button disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
        Previous
      </button>
      <span aria-current="page">{page}</span>
      <button disabled={page >= pageCount} onClick={() => onPageChange(page + 1)}>
        Next
      </button>
    </nav>
  );
}
```

**Server-driven:** fetch when `page` changes; show skeleton; disable controls while loading.

**a11y:** `aria-current="page"`, keyboard focus, do not rely on div-only buttons.

**Rule of thumb**

- Prefer cursor/offset APIs from backend for large datasets; client-only slice when `total` is small.
