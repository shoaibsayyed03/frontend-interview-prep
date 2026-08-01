---
title: "How would you design a reusable table with sorting, filtering, pagination, and column resize?"
type: scenario
difficulty: advanced
tags: [table, tanstack-table, data-grid, lld]
lastUpdated: 2026-08-01
---

**Separation:** Headless table logic (TanStack Table) + presentational `<Table>` UI. Parent owns **data fetching**; table owns **view state** (sort, column filters, page index, column widths).

**Hooks to extract**

- `useTableState()` — sort, pagination, column visibility.
- `useColumnResize()` — pointer handlers + min/max width.
- `useServerTableQuery(state)` — maps table state to API query params.

**Parent API**

```jsx
<DataTable
  columns={columns}
  data={rows}
  rowCount={total}
  state={tableState}
  onStateChange={setTableState}
  isLoading={loading}
/>
```

Columns defined as `{ id, header, accessor, enableSorting, cell }`. Server-side mode: pass `manualSorting`, `manualPagination`, `manualFiltering`.

**Rule of thumb**

- Default to **server-driven** sort/filter/page for large datasets; client-side only when row count is small and stable.
