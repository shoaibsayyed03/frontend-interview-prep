---
title: "How does React reconciliation and the Virtual DOM work?"
type: conceptual
difficulty: intermediate
tags: [virtual-dom, reconciliation, fiber, rendering]
lastUpdated: 2026-08-01
---

React describes UI as a tree of elements. On each render it builds a new tree and **reconciles** it with the previous one: same type and key → update props; different type → replace subtree; lists use keys to match items.

The **Virtual DOM** is this lightweight description — not a separate DOM clone you manipulate by hand. React diffs descriptions and commits the minimal set of changes to the real DOM.

**Fiber** is React’s unit of work: reconciliation can be split, paused, and resumed, enabling concurrent features and prioritization (e.g. keep input responsive while deferring heavy updates).

Interview-ready one-liner:

> The JS engine runs your bundle → React executes components → builds an element tree → diffs against the last tree → batches DOM mutations → the browser paints.

**Why re-renders hurt performance:** Each commit can trigger layout and paint. Unnecessary renders waste work even when the DOM output is unchanged — hence `memo`, stable props, and colocated state.

**Rule of thumb**

- Keys identify list identity across reorder.
- Type changes tear down and recreate subtrees (state resets unless preserved).
