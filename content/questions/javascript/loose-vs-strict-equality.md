---
title: "Explain the difference between == and ===?"
type: tricky
difficulty: beginner
tags: [equality, type-coercion, operators]
lastUpdated: 2026-08-01
---

The **Equality or Loose Equality Operator (`==`)** compares values only, and performs [type coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion) if the types are different. That means JavaScript will try to convert one operand to the type of the other before comparing.

```js
5 == "5"; // true  (string "5" gets converted to number 5)
0 == false; // true  (false gets converted to 0)
```

The **Strict Equality Operator (`===`)** compares both value and type, and there will be no type coercion. It only returns `true` if both the type and value match.

```js
5 === "5"; // false (number vs string)
0 === false; // false (number vs boolean)
5 === 5; // true  (same type and value)
```

**Rule of thumb**

- Always prefer `===` because it avoids unexpected results caused by type coercion.
- Use `==` only if you really want JavaScript’s type conversion.
