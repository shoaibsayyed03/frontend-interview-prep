---
title: "How do the event loop, microtasks, and macrotasks work?"
type: conceptual
difficulty: intermediate
tags: [event-loop, promises, setTimeout, async]
lastUpdated: 2026-08-01
---

**Call stack** runs synchronous code. When empty, the engine drains **microtasks** (Promise callbacks, `queueMicrotask`) completely, then takes **one macrotask** (`setTimeout`, I/O, UI events), and repeats.

```js
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// 1, 4, 3, 2
```

**Why it matters:** `await` and `.then` schedule microtasks — they run before the next timer or paint. Long microtask chains can starve rendering.

**Rule of thumb**

- Microtasks = “finish all promise reactions first”; macrotasks = “next turn of the event loop.”
