---
title: "Are two arrays with the same values equal with == or ===?"
type: tricky
difficulty: beginner
tags: [arrays, equality, references]
lastUpdated: 2026-08-01
---

```js
let x = [1, 2, 3];
let y = [1, 2, 3];
console.log(x == y);
console.log(x === y);
```

**Outputs:** `false`, `false`

**Why**

- Arrays are **objects**. `==` and `===` compare **references**, not deep structure.
- Two literals create two different objects even when contents match.

**Deep compare**

- Compare length and elements in a loop, or serialize carefully (watch key order for objects), or use a utility in tests.

**Rule of thumb**

- Same contents ≠ same reference for objects and arrays.
