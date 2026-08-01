---
title: "What is a higher-order function?"
type: conceptual
difficulty: intermediate
tags: [functions, higher-order, callbacks, map-filter-reduce]
lastUpdated: 2026-08-01
---

A higher-order function is a function that can either take another function as an argument, return a function, or both. Since JavaScript treats functions as first-class citizens, this is possible. Higher-order functions allow us to build more reusable and abstract logic, and they are the foundation of functional programming patterns in JavaScript.

**Real-life built-in examples:** Methods like `map`, `filter`, and `reduce` are higher-order functions because they accept other functions as arguments.

```js
// First-order function (does not accept or return another function)
const firstOrderFunc = () =>
  console.log("Hello, I am a first-order function");

// Higher-order function (accepts a function as an argument)
const higherOrder = (callback) => callback();

// Passing the first-order function to the higher-order function
higherOrder(firstOrderFunc);
```

In this example:

- `firstOrderFunc` is a regular (first-order) function.
- `higherOrder` is a higher-order function because it takes another function as an argument.
- `firstOrderFunc` is also called a **callback function** because it is passed to and executed by another function.
