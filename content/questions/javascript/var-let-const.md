---
title: "What is the difference between var, let, and const?"
type: conceptual
difficulty: beginner
tags: [var, let, const, hoisting, tdz]
lastUpdated: 2026-08-01
---

JavaScript provides three ways to declare variables: `var`, `let`, and `const`.

**Scope:** Variables declared using the `var` keyword are scoped to the function in which they are created, or if created outside of any function, then scoped to the global object. `let` and `const` are block-scoped, meaning they are only accessible within the nearest set of curly braces (function, if-else block, or for-loop).

```js
if (true) {
  var x = 10;
  let y = 20;
  const z = 30;
}
console.log(x); // 10 (var is not block scoped)
console.log(y); // ReferenceError
console.log(z); // ReferenceError
```

**Initialization:** `var` and `let` variables can be initialized without a value, but `const` declarations must be initialized.

```js
var a; // OK
let b; // OK
const c; // SyntaxError: Missing initializer in const declaration
```

**Redeclaration:** Redeclaring a variable with `var` will not throw an error, but `let` and `const` will.

```js
var x = 1;
var x = 2; // OK

let y = 3;
let y = 4; // SyntaxError
```

**Reassignment:** Variables declared using `var` and `let` allow reassigning the variable's value, while `const` does not.

```js
var x = 1;
x = 2; // OK

let y = 3;
y = 4; // OK

const z = 5;
z = 6; // TypeError: Assignment to constant variable
```

**Accessing before declaration:** `var`, `let`, and `const` declared variables are all hoisted. `var` declared variables are auto-initialized with `undefined`. However, `let` and `const` variables are not initialized, and accessing them before the declaration will result in a `ReferenceError` because they are in a Temporal Dead Zone (TDZ) from the start of the block until the declaration is processed.

```js
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError (TDZ)
let b = 10;

console.log(c); // ReferenceError (TDZ)
const c = 15;
```

**Rule of thumb**

- Use `const` by default, `let` if the value needs to change, and avoid `var` to prevent scope/hoisting issues.
