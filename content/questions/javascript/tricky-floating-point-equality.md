---
title: "Is 0.1 + 0.2 === 0.3?"
type: tricky
difficulty: beginner
tags: [floating-point, numbers, equality]
lastUpdated: 2026-08-01
---

```js
console.log(0.1 + 0.2 === 0.3);
```

**Output:** `false`

**Why**

- Binary floating-point cannot represent `0.1` and `0.2` exactly.
- `0.1 + 0.2` is `0.30000000000000004`, not strictly `0.3`.

**Fix for comparisons**

```js
Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON; // true
```

Or round/format for display; use integers (cents) for money.

**Rule of thumb**

- Never rely on `===` for decimal fractions without an epsilon or fixed-point strategy.
