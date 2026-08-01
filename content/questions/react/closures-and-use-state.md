---
title: "How do closures power React useState?"
type: conceptual
difficulty: intermediate
tags: [closures, useState, hooks, state]
lastUpdated: 2026-08-01
---

React function components run again on every render. `useState` still “remembers” the latest value because React stores state outside the component and gives you a stable `setState` function that closes over that storage.

On each render:

- React looks up state by hook index (linked list on the fiber).
- It returns the current value and a `setState` that updates that slot and schedules a re-render.

Event handlers and effects are functions created during a render. They close over props and state from that render unless you refresh them with correct dependencies or functional updates.

```js
setCount((c) => c + 1); // always uses latest state, no stale read
```

**Why it matters in interviews**

- `useState` is not magic syntax — it is state stored in React plus closures for updaters.
- Stale UI often means a closure from an old render (missing deps, wrong callback identity).

**Rule of thumb**

- Use functional updates when the next state depends on the previous state.
- Treat every handler as closing over the render where it was created.
