---
title: "How would you implement your own useState hook?"
type: coding
difficulty: advanced
tags: [useState, hooks, closures, polyfill]
lastUpdated: 2026-08-01
---

A minimal mental model: keep an array of state cells per component instance, advance an index on each hook call, and return `[value, setter]` where the setter updates the cell and triggers a re-render.

```js
let hookIndex = 0;
const hookStates = [];

function useState(initial) {
  const i = hookIndex++;
  if (hookStates[i] === undefined) {
    hookStates[i] =
      typeof initial === "function" ? initial() : initial;
  }

  const setState = (next) => {
    const value =
      typeof next === "function" ? next(hookStates[i]) : next;
    if (Object.is(value, hookStates[i])) return;
    hookStates[i] = value;
    rerender(); // schedule update (React uses fibers + concurrent scheduling)
  };

  return [hookStates[i], setState];
}

function rerender() {
  hookIndex = 0;
  App(); // real React reconciles the tree instead
}
```

Real React also:

- Stores hooks on fiber nodes (per component instance, not one global array).
- Batches multiple `setState` calls in event handlers.
- Supports functional updates and concurrent rendering.

**Rule of thumb**

- Hooks need stable storage + ordered calls + a scheduler. Breaking hook order breaks the model.
