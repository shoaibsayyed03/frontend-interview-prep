---
title: "What is scope chain?"
type: conceptual
difficulty: intermediate
tags: [scope-chain, closures, lexical-scope]
lastUpdated: 2026-08-01
---

The scope chain in JavaScript is the mechanism that determines how variable lookup works.

When you try to access a variable, the JavaScript engine:

1. Looks in the current scope.
2. If not found, goes to the outer (parent) scope.
3. Keeps going up until it reaches the global scope.
4. If not found anywhere, throws a `ReferenceError`.

This chain of nested scopes is called the scope chain.

```js
var a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;
    console.log(a); // found in global scope
    console.log(b); // found in outer scope
    console.log(c); // found in inner scope
  }

  inner();
}

outer();
```

Here, `inner()` has access to `c` (its own scope), `b` (outer function scope), and `a` (global scope). This lookup process forms the scope chain.
