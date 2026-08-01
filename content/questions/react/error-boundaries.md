---
title: "How do Error Boundaries work in React?"
type: conceptual
difficulty: intermediate
tags: [error-boundaries, errors, resilience]
lastUpdated: 2026-08-01
---

Error boundaries catch **render-phase** errors in child trees and show fallback UI instead of crashing the whole app. They do **not** catch event handler errors, async code, or SSR errors by themselves.

Class component pattern (still the built-in API):

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    log(error, info);
  }
  render() {
    return this.state.hasError ? <Fallback /> : this.props.children;
  }
}
```

Libraries like `react-error-boundary` wrap this for function components.

**Rule of thumb**

- Place boundaries around routes or major widgets.
- Pair with logging (Sentry) in `componentDidCatch`.
