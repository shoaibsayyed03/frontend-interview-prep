---
title: "When should you use useReducer instead of useState?"
type: conceptual
difficulty: intermediate
tags: [useReducer, useState, state-management]
lastUpdated: 2026-08-01
---

**useReducer** fits when the next state depends on **previous state + an action**, especially with multiple fields or complex transitions.

```jsx
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
const [state, dispatch] = useReducer(reducer, { count: 0 });
```

Prefer **useState** for simple independent values. Prefer **useReducer** for wizard steps, forms with many action types, or state you want to unit-test as a pure function.

**Rule of thumb**

- If you have three or more related `setState` calls for one user action, consider a reducer.
