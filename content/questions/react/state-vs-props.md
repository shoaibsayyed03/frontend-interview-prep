---
title: "What is the difference between state and props in React?"
type: conceptual
difficulty: beginner
tags: [state, props, data-flow]
lastUpdated: 2026-08-01
---

**Props** — data passed **from parent**; read-only for the child. Configure a component from outside.

**State** — data **owned inside** the component (or hook); updates trigger re-renders.

| | Props | State |
|---|--------|--------|
| Source | Parent | Local / store |
| Mutability | Immutable for child | Updated via `setState` / `dispatch` |
| Use | Configuration, callbacks | UI interaction, form input |

**Lifting state up:** siblings share state by moving it to the closest common parent and passing props down.

**Rule of thumb**

- Props down, events up — state lives at the lowest level that still satisfies all consumers.
