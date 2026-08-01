---
title: "What is the difference between null and undefined?"
type: tricky
difficulty: beginner
tags: [types, "null", undefined, equality]
lastUpdated: 2026-08-01
---

`null` and `undefined` are both used in JavaScript to represent "empty" or "missing" values, but they’re not the same.

**`undefined`:** If you just declare a variable and don’t assign any value to it, JavaScript automatically sets it to `undefined`. Also, a function that doesn’t explicitly return anything will return `undefined`.

**`null`:** You assign `null` when you want to explicitly say, "this variable should have no value."

The `typeof undefined` is `undefined`, whereas the `typeof null` is an `object`. And if you compare both values using Loose Equality (`==`), it returns `true`, and for Strict Equality (`===`) it returns `false`.

```js
let a;
console.log(a); // undefined
console.log(typeof a); // "undefined"

function test() {}
console.log(test()); // undefined

let b = null;
console.log(b); // null
console.log(typeof b); // "object"

console.log(null == undefined); // true   (loose equality)
console.log(null === undefined); // false  (strict equality)
```

**Rule of thumb**

- Use `undefined` for unintentional missing values (JavaScript does this automatically).
- Use `null` when you want to intentionally clear a variable or say "nothing here".
