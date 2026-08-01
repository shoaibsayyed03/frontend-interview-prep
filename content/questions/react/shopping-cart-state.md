---
title: "How would you implement a shopping cart with add and remove items?"
type: coding
difficulty: intermediate
tags: [state, cart, machine-coding, context]
lastUpdated: 2026-08-01
---

**State:** `Map<productId, { product, qty }>` or array with normalized lookup.

```jsx
function cartReducer(state, action) {
  switch (action.type) {
    case "add": {
      const line = state[action.id] ?? { product: action.product, qty: 0 };
      return { ...state, [action.id]: { ...line, qty: line.qty + 1 } };
    }
    case "remove":
      return omitId(state, action.id);
    case "setQty":
      return { ...state, [action.id]: { ...state[action.id], qty: action.qty } };
    default:
      return state;
  }
}
```

**Derived:** subtotal = `sum(qty * price)` via `useMemo`. Persist cart id in cookie/localStorage for guests.

**Rule of thumb**

- Keep cart logic in a reducer or small store; UI components only dispatch actions.
