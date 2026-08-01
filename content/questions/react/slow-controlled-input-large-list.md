---
title: "A controlled input lags while typing on a large list — what do you check?"
type: scenario
difficulty: intermediate
tags: [performance, rerender, profiling, machine-coding]
lastUpdated: 2026-08-01
---

**Likely cause:** Parent re-renders on every keystroke and **all list rows re-render** because state lifted too high or unstable props.

**Debug**

- React DevTools **Profiler** — record while typing; see which components re-render.
- `why-did-you-render` or logging render counts in dev.

**Fixes**

- **Colocate** search state in a child; pass stable callbacks (`useCallback`) only where needed.
- **Memoize rows** with `React.memo` + stable item references.
- **Virtualize** the list so DOM size stays bounded.
- Split context so unrelated consumers do not subscribe to input state.

**Anti-pattern:** Blanket `useCallback` on everything without measuring.

**Rule of thumb**

- Typing should not re-render thousands of rows — isolate input state or virtualize.
