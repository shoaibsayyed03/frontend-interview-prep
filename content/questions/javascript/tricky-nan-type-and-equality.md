---
title: "What are typeof NaN and NaN === NaN?"
type: tricky
difficulty: beginner
tags: [nan, typeof, equality, numbers]
lastUpdated: 2026-08-01
---

```js
console.log(typeof NaN);
console.log(NaN === NaN);
```

**Outputs**

```txt
"number"
false
```

**Why**

- `NaN` is IEEE-754 “Not a Number” but its JavaScript **typeof** is still `"number"`.
- `NaN` is the only value where **`===` to itself is false**; use `Number.isNaN(value)` instead of `value === NaN`.

**Rule of thumb**

- Check NaN with `Number.isNaN(x)` (or `Object.is(x, NaN)`).
