---
title: "What are Intersection Observer, Mutation Observer, and Web Workers?"
type: conceptual
difficulty: intermediate
tags: [intersection-observer, mutation-observer, web-workers, browser-apis]
lastUpdated: 2026-08-01
---

**Intersection Observer** — async callbacks when an element enters/leaves the viewport. Used for lazy images, infinite scroll triggers, and ad viewability without scroll listeners.

**Mutation Observer** — watches DOM tree changes (childList, attributes). Used in tests, widgets integrating with third-party DOM, or devtools — use sparingly in app code.

**Web Workers** — run JS on a background thread with message passing. Used for parsing large files, crypto, or heavy computation so the main thread stays responsive. No direct DOM access from workers.

**Rule of thumb**

- Prefer observers over high-frequency scroll handlers; workers for CPU-bound work, not simple UI updates.
