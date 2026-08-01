---
title: "What is a first-order function?"
type: conceptual
difficulty: beginner
tags: [functions, first-order]
lastUpdated: 2026-08-01
---

A first-order function is a function that does not take another function as an argument and does not return another function. In other words, it works only with primitive or non-function values.

```js
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // 5
```
