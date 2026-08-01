---
title: "What are Higher-Order Components (HOCs)?"
type: conceptual
difficulty: intermediate
tags: [hoc, patterns, composition, reuse]
lastUpdated: 2026-08-01
---

A **HOC** is a function that takes a component and returns a new component with extra props or behavior.

```js
function withAuth(Wrapped) {
  return function WithAuth(props) {
    const user = useUser();
    if (!user) return <Login />;
    return <Wrapped {...props} user={user} />;
  };
}
```

Hooks and composition often replace HOCs today, but HOCs still appear in libraries (routers, i18n).

**Downsides:** wrapper hell in DevTools, prop name collisions, harder typing.

**Rule of thumb**

- Prefer custom hooks or composition unless you need to wrap many components uniformly.
