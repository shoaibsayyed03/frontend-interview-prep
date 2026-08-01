---
title: "What is the difference between deep copy and shallow copy?"
type: conceptual
difficulty: beginner
tags: [objects, immutability, clone]
lastUpdated: 2026-08-01
---

**Shallow copy** duplicates top-level properties; nested objects are **shared references**.

```js
const copy = { ...obj };
const copy2 = Object.assign({}, obj);
```

**Deep copy** clones nested structures so mutations in the copy do not affect the original.

- `structuredClone(obj)` (modern, handles many types).
- JSON parse/stringify for plain JSON data only (loses `Date`, `undefined`, etc.).
- Libraries (lodash `cloneDeep`) for complex graphs.

**React:** State updates should be immutable — shallow copy top level + copy nested slices you change.

**Rule of thumb**

- Spread is enough for one level; nested updates need nested spreads or `structuredClone` / Immer.
