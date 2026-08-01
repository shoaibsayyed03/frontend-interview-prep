---
title: "What is the currying function?"
type: conceptual
difficulty: intermediate
tags: [currying, functional-programming, closures]
lastUpdated: 2026-08-01
---

A currying function transforms a function with multiple arguments into a sequence of functions that each take one argument at a time. Instead of passing all arguments at once, you pass them step by step, and each function returns another function until all arguments are provided.

The main purpose of currying is reusability and function composition — it allows you to create specialized functions from more general ones.

```js
// Normal function
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3)); // 6

// Curried function
function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3)); // 6
```
