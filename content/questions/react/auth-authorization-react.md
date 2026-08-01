---
title: "How would you implement authentication and authorization in React?"
type: scenario
difficulty: intermediate
tags: [auth, jwt, protected-routes, rbac]
lastUpdated: 2026-08-01
---

**Auth flow (JWT):** Login → store access token (memory or httpOnly cookie from BFF) → attach to API calls → refresh token rotation before expiry.

**Protect routes**

```jsx
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <Spinner />;
  if (!user) return <Navigate to="/login" replace state={{ from: location }} />;
  return children;
}
```

Next.js App Router: check session in middleware or layout; redirect unauthenticated users before rendering children.

**Authorization:** Role/permission checks in route guards *and* on the server — UI hiding is not security. `<Can permission="billing:read">` pattern for components.

**Token expiry:** Silent refresh with refresh token; on failure, clear session and redirect to login. Short-lived access tokens (5–15 min).

**Rule of thumb**

- Never store long-lived tokens in `localStorage` if XSS is in your threat model; prefer httpOnly cookies + CSRF protection for session cookies.
