---
title: "What does expert-level frontend engineering cover beyond UI?"
type: conceptual
difficulty: advanced
tags: [career, browser, architecture, platform]
lastUpdated: 2026-08-01
---

Frameworks change; the **browser platform** stays. Expert frontend work is not “making buttons pretty” — it is shipping reliable software in a hostile runtime.

**Platform and performance**

- Rendering pipeline: DOM updates, **layout/reflow**, paint, composite.
- **Core Web Vitals** at scale (LCP, INP, CLS).
- Event loop, microtasks, and main-thread budgeting.
- Profiling across devices and network conditions.

**Architecture and state**

- Component boundaries that scale across large teams and codebases.
- Client async flows: race conditions, cancellation, **memory leaks**.

**Quality bars**

- **Accessibility** for diverse input and assistive tech.
- **Security**: CSP, XSS surfaces, sanitizing HTML, safe third-party scripts.

**Reality of the client**

- Thousands of devices, multiple engines, slow networks, unpredictable user input.
- Backend runs in **your** environment; frontend runs on **everyone else’s**.

**Interview use**

- When asked “Is frontend just UI?” — contrast **feature delivery** with **platform depth**: performance, a11y, security, and debuggability under real-world constraints.

**Rule of thumb**

- Give **one** example from each bucket (perf, a11y, architecture) instead of a generic “frontend is hard” speech.
