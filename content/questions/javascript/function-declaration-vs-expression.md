---
title: "What is the difference between function declarations and function expressions?"
type: conceptual
difficulty: beginner
tags: [functions, declarations, expressions]
lastUpdated: 2026-08-01
---

A **function declaration** is when you define a function using the `function` keyword directly.

A **function expression** is when a function is assigned to a variable.

```js
function greet() {
  console.log("Hello");
}

const sayHi = function () {
  console.log("Hi");
};
```
