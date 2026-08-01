---
title: "How would you implement a curried sum like sum(1)(2)(3)()?"
type: coding
difficulty: intermediate
tags: [currying, closures, interview]
lastUpdated: 2026-08-01
---

Each call returns a function that accumulates until invoked with no args (or empty call) to flush the total.

```js
function sum(a) {
  const inner = (b) => (b === undefined ? a : sum(a + b));
  inner.valueOf = () => a;
  inner.toString = () => String(a);
  return inner;
}

// sum(1)(2)(3)() or +sum(1)(2)(3) depending on API
function sumStrict(a) {
  let total = a;
  function next(b) {
    if (b === undefined) return total;
    total += b;
    return next;
  }
  return next;
}
```

Clarify interview API: infinite arity vs final `()` sentinel.

**Rule of thumb**

- Currying fixes arity step-by-step; know when the exercise expects `valueOf` coercion vs explicit terminal call.
