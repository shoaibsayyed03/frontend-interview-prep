---
title: "How do you prevent memory leaks in React apps?"
type: tricky
difficulty: intermediate
tags: [memory-leaks, useEffect, cleanup, subscriptions]
lastUpdated: 2026-08-01
---

Leaks happen when work continues after unmount or listeners hold references to detached DOM.

**Common causes**

- Timers (`setInterval`) without `clearInterval` in cleanup.
- Event listeners on `window` / `document` not removed.
- Subscriptions (WebSocket, RxJS) not unsubscribed.
- Resolved promises calling `setState` after unmount (use abort flag or `AbortController`).
- Large closures holding DOM nodes in refs longer than needed.

```js
useEffect(() => {
  function onResize() { /* ... */ }
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
}, []);
```

**Rule of thumb**

- Every effect that registers something should return cleanup.
- Test with Strict Mode double-mount in development.
