---
title: "What does this hoisting snippet print twice?"
type: tricky
difficulty: advanced
tags: [hoisting, functions, var, tdz]
lastUpdated: 2026-08-01
---

```js
console.log(foo());
function foo() {
  return "a";
}
function foo() {
  return "b";
}
var foo = function () {
  return "c";
};
function foo() {
  return "d";
}
console.log(foo());
```

**Outputs:** `"d"`, then `"c"`

**Why**

1. **Function declarations** are hoisted; duplicate names — the **last** function declaration wins → `foo` returns `"d"` before any line runs.
2. **First** `console.log(foo())` runs that function → `"d"`.
3. **`var foo = function () { return "c"; }`** runs at runtime and **reassigns** `foo` to the function expression (the `var` binding was already subject to hoisting, but the assignment happens here).
4. **Second** `console.log(foo())` calls the new function → `"c"`.

The middle `function foo() { return "b"; }` and earlier declarations are overwritten during hoisting; only the final declaration matters until the assignment runs.

**Rule of thumb**

- Do not mix duplicate `function foo` declarations with `var foo = ...` in real code — predict hoisting + assignment order in interviews only.
