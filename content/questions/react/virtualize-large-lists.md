---
title: "How do you handle large lists and memory-heavy UI?"
type: scenario
difficulty: intermediate
tags: [virtualization, performance, react-window, web-workers]
lastUpdated: 2026-08-01
---

Rendering 5,000+ rows mounts 5,000 DOM nodes — slow layout, high memory, janky scroll.

**Virtualization** (`react-window`, `@tanstack/react-virtual`) renders only visible rows plus a small overscan buffer.

**Other tactics**

- **Web Workers** for parsing CSV/JSON or heavy computation off the main thread.
- **Debouncing / throttling** scroll and resize handlers.
- **Code splitting** so heavy panels load on demand.
- **Pagination or infinite scroll** with modest page sizes.
- **`useMemo`** for expensive derived rows, not for every cell blindly.

**Rule of thumb**

- Virtualize when item count × row height exceeds comfortable DOM size (hundreds+ on mobile).
