---
title: "How would you implement route-based code splitting with role-based access control?"
type: scenario
difficulty: advanced
tags: [code-splitting, rbac, react-router, nextjs]
lastUpdated: 2026-08-01
---

**Lazy routes + guards**

```jsx
const AdminDashboard = lazy(() => import("./AdminDashboard"));

function AdminRoute() {
  const { user } = useAuth();
  if (!user?.roles.includes("admin")) {
    return <Navigate to="/unauthorized" replace />;
  }
  return (
    <Suspense fallback={<RouteSkeleton />}>
      <AdminDashboard />
    </Suspense>
  );
}
```

**Next.js:** Split by segment with dynamic imports in client components; enforce roles in `middleware.ts` from session cookie before the route renders.

**Fallbacks:** Per-route skeletons (table shell vs form shell) — generic spinner only as last resort.

**Preload:** `onMouseEnter` on nav links to prefetch lazy chunks for perceived speed.

**Rule of thumb**

- Authorize on the server for every API and page data fetch; client RBAC is UX only.
