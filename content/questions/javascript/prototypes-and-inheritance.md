---
title: "How do prototypes and inheritance work in JavaScript?"
type: conceptual
difficulty: intermediate
tags: [prototypes, inheritance, classes]
lastUpdated: 2026-08-01
---

Every object has an internal `[[Prototype]]` (accessed via `Object.getPrototypeOf` / `__proto__`). Property lookup walks the chain until found or `null`.

```js
function User(name) {
  this.name = name;
}
User.prototype.greet = function () {
  return `Hi ${this.name}`;
};
```

`class` syntax is sugar over prototype constructors + `extends` sets up the chain.

**vs classical OOP:** JavaScript uses **delegation**, not copied class instances. Methods live on shared prototype objects.

**Rule of thumb**

- Prefer composition and plain objects in modern code; know prototypes for interviews and reading legacy code.
