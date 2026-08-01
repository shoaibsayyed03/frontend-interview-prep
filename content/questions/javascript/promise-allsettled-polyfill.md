---
title: "How would you polyfill Promise.allSettled?"
type: coding
difficulty: intermediate
tags: [promises, polyfill, async]
lastUpdated: 2026-08-01
---

Wait for every input promise; never short-circuit on rejection.

```js
function allSettled(iterable) {
  return Promise.all(
    [...iterable].map((p) =>
      Promise.resolve(p).then(
        (value) => ({ status: "fulfilled", value }),
        (reason) => ({ status: "rejected", reason }),
      ),
    ),
  );
}
```

Each result is `{ status, value? | reason? }` — useful for batch requests where partial failure is OK.

**Rule of thumb**

- `Promise.all` fails fast; `allSettled` reports every outcome — pick based on whether one failure should cancel the batch.
