---
title: "What is the difference between call, apply, and bind?"
type: conceptual
difficulty: beginner
tags: [this, functions, bind]
lastUpdated: 2026-08-01
---

All three set **`this`** for a function invocation.

- **`call(thisArg, a, b)`** — invoke now with comma-separated args.
- **`apply(thisArg, [a, b])`** — invoke now with an args array.
- **`bind(thisArg, a)`** — return a **new function** with bound `this` (and optional partial args); does not invoke immediately.

```js
fn.call(obj, 1, 2);
fn.apply(obj, [1, 2]);
const bound = fn.bind(obj, 1);
bound(2);
```

**Real use:** borrow methods (`Array.prototype.slice.call(arguments)`), fix callbacks, partial application.

**Rule of thumb**

- Use **bind** when passing a method as a callback; use **call/apply** when invoking immediately with a chosen `this`.
