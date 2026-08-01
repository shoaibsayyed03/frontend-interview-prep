---
title: "Explain the concept of scope in JavaScript"
type: conceptual
difficulty: beginner
tags: [scope, variables, functions]
lastUpdated: 2026-08-01
---

In JavaScript, scope determines the accessibility of variables and functions at different parts of the code. There are three main types of scope: global scope, function scope, and block scope.

**1. Global scope:** Variables declared outside any function or block have global scope. They are accessible from anywhere in the code.

```js
var globalVar = "I am global";

function myFunction() {
  console.log(globalVar); // Accessible here
}

myFunction();
console.log(globalVar); // Accessible here
```

**2. Function scope:** Variables declared within a function are in function scope. They are accessible only within that function.

```js
function myFunction() {
  var functionVar = "I am in a function";
  console.log(functionVar); // Accessible here
}

myFunction();
console.log(functionVar); // ReferenceError: functionVar is not defined
```

**3. Block scope:** Variables declared with `let` or `const` within a block (for example, curly braces) have block scope. They are accessible only within that block.

```js
if (true) {
  let blockVar = "I am in a block";
  console.log(blockVar); // Accessible here
}

console.log(blockVar); // ReferenceError: blockVar is not defined
```
