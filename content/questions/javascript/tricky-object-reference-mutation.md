---
title: "What logs after mutating a shared object reference?"
type: tricky
difficulty: beginner
tags: [objects, references, mutation]
lastUpdated: 2026-08-01
---

```js
let a = { x: 1 };
let b = a;
a.x = 2;
b.y = 3;
console.log(a, b);
```

**Output**

Both log `{ x: 2, y: 3 }` (same object reference).

**Why**

- Objects are assigned **by reference**. `a` and `b` point to one object in memory.
- Mutations through either variable are visible on both.

**Rule of thumb**

- Copying an object needs a clone (`structuredClone`, spread for shallow copy) if you want independence.
