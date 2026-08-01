---
title: "What is the difference between debouncing and throttling?"
type: conceptual
difficulty: intermediate
tags: [debounce, throttle, performance]
lastUpdated: 2026-08-01
---

**Debounce:** run **after** events stop for `wait` ms — search input, resize layout recalc.

**Throttle:** run **at most once per** `wait` ms while events fire — scroll, mousemove, window resize handlers.

```js
function debounce(fn, wait) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), wait);
  };
}
```

Use **debounce** when you care about the final value; **throttle** when you need periodic updates during continuous input.

**Rule of thumb**

- Debounce API search; throttle infinite-scroll sentinel checks or scroll-position reads.
