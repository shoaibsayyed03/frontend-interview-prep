---
title: "How does lazy loading and code splitting work in React?"
type: conceptual
difficulty: intermediate
tags: [lazy-loading, code-splitting, suspense, performance]
lastUpdated: 2026-08-01
---

**Code splitting** breaks the bundle into chunks loaded on demand. **Lazy loading** defers loading a component until it is needed (route, modal, tab).

```jsx
const Admin = lazy(() => import("./AdminPanel"));

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Admin />
    </Suspense>
  );
}
```

**When to use**

- Route-level splits (biggest win).
- Heavy charts, editors, or admin-only UI.
- Not for tiny components — overhead of extra requests.

Next.js adds file-based routing splits and `next/dynamic` with SSR options.

**Rule of thumb**

- Lazy load by user journey, not every file.
- Always provide a meaningful `Suspense` fallback.
