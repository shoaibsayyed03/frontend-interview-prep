---
title: "How would you implement a function that runs only once?"
type: coding
difficulty: beginner
tags: [closures, higher-order-functions]
lastUpdated: 2026-08-01
---

Cache the result (or `undefined`) after the first call; ignore later invocations.

```js
function once(fn) {
  let called = false;
  let result;
  return function (...args) {
    if (called) return result;
    called = true;
    result = fn.apply(this, args);
    return result;
  };
}
```

Use for init hooks, lazy singletons, or guarding duplicate submit handlers.

**Rule of thumb**

- If the wrapped function can throw, decide whether failed attempts should allow retry — default `once` usually does not.
