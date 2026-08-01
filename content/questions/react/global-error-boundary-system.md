---
title: "How would you design a global error boundary system in React?"
type: scenario
difficulty: intermediate
tags: [error-boundary, logging, fallback-ui, resilience]
lastUpdated: 2026-08-01
---

**Layers**

1. **Root boundary** — catastrophic render errors; minimal “Something went wrong” + reload.
2. **Route/feature boundaries** — isolate checkout vs catalog so one widget crash does not blank the app.
3. **Optional widget boundary** — chart/card fallback while the rest of the page works.

```jsx
<RootErrorBoundary onError={logToSentry}>
  <Router>
    <Route path="/dashboard" element={
      <FeatureErrorBoundary fallback={<DashboardError />}>
        <Dashboard />
      </FeatureErrorBoundary>
    } />
  </Router>
</RootErrorBoundary>
```

**404 / network:** Not caught by error boundaries (those are render errors). Use router `notFound`, error routes, and React Query `isError` for fetch failures.

**Logging:** `componentDidCatch` / `react-error-boundary` `onError` → Sentry with route, user id, release.

**Rule of thumb**

- Boundaries do not catch event handlers or async errors — use try/catch + toast there; pair boundaries with global `unhandledrejection` listener for reporting.
