---
title: "What is the difference between class and functional components?"
type: conceptual
difficulty: beginner
tags: [class-components, hooks, lifecycle]
lastUpdated: 2026-08-01
---

**Class components** use `extends React.Component`, instance `this.state`, and lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).

**Functional components** are functions that return JSX. State and lifecycle behavior are expressed with hooks (`useState`, `useEffect`, `useLayoutEffect`, etc.).

| Concern | Class | Function + hooks |
|--------|--------|------------------|
| State | `this.setState` | `useState` / `useReducer` |
| Side effects | lifecycle methods | `useEffect` |
| Instance refs | `createRef` on class | `useRef` |
| Optimization | `PureComponent`, `shouldComponentUpdate` | `React.memo`, `useMemo`, `useCallback` |

Modern codebases standardize on function components; classes remain in legacy code and some error-boundary patterns (though `react-error-boundary` is common today).

**Rule of thumb**

- Map `componentDidMount` + `componentWillUnmount` → one `useEffect` with cleanup.
- Map `componentDidUpdate` → `useEffect` with specific dependencies (carefully).
