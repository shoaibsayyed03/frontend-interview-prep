---
title: "What is React.memo and a pure component?"
type: conceptual
difficulty: intermediate
tags: [react-memo, purecomponent, shouldComponentUpdate, performance]
lastUpdated: 2026-08-01
---

**`PureComponent` (class)** shallow-compares props and state in `shouldComponentUpdate` to skip re-renders.

**`React.memo` (function)** memoizes a component — re-render only if props shallow-change (optional custom compare for deep props).

```jsx
const Row = React.memo(function Row({ item }) {
  return <div>{item.name}</div>;
});
```

Shallow compare means new object/array references fail even if contents are equal — pair with stable props or custom `arePropsEqual`.

**Rule of thumb**

- Memo leaf components that render often with stable props.
- Profile before memoizing entire subtrees.
