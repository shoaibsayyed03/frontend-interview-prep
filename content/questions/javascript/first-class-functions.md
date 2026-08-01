---
title: "What is a first-class function?"
type: conceptual
difficulty: beginner
tags: [functions, first-class, callbacks]
lastUpdated: 2026-08-01
---

In JavaScript, first-class functions (first-class citizens) means that functions are treated like any other value. You can assign a function to a variable, pass it as an argument to another function, return it from a function, or even store it inside objects and arrays.

This flexibility allows powerful patterns like callbacks, higher-order functions, and functional programming techniques.

For example, the handler function below is assigned to a variable and then passed as an argument to the `addEventListener` method.

```js
const handler = () => console.log("This is a click handler function");
document.addEventListener("click", handler);
```
