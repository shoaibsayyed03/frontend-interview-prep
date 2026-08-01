---
title: "What is hoisting?"
type: conceptual
difficulty: beginner
tags: [hoisting, var, functions, execution-context]
lastUpdated: 2026-08-01
---

Hoisting is a JavaScript mechanism where variable and function declarations are moved ("hoisted") to the top of their scope during the memory creation phase of the execution context. This means you can use functions and variables before they are actually declared in code — but how they behave depends on whether you use `var`, `let`, `const`, or a function declaration. Remember that JavaScript only hoists declarations, not initialization.

```js
console.log(a); // undefined (hoisted but not assigned yet)
var a = 1;
console.log(a); // 1

console.log(b); // ReferenceError (TDZ)
let b = 20;

greet(); // This works, prints "Hello"

function greet() {
  console.log("Hello");
}
```
