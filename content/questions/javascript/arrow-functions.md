---
title: "What is an arrow function?"
type: conceptual
difficulty: beginner
tags: [arrow-functions, this, es6]
lastUpdated: 2026-08-01
---

An arrow function is a shorter way to write functions in JavaScript, introduced in ES6. Instead of using the `function` keyword, we use the `=>` syntax. They are often used for simple, one-line functions or callbacks.

The biggest difference is how they handle the `this` keyword:

- Regular functions get their own `this` depending on how they are called.
- Arrow functions do not have their own `this` — they use the `this` value from the surrounding scope (lexical `this`).

```js
const arrowFunc1 = (a, b) => a + b; // Multiple parameters, returns a + b
const arrowFunc2 = (a) => a * 10; // Single parameter, returns a * 10
const arrowFunc3 = () => {}; // No parameters, returns undefined
const arrowFunc4 = (a, b) => {
  const sum = a + b;
  return sum * 2;
};
```
