---
title: "How do you re-render when the window is resized?"
type: conceptual
difficulty: beginner
tags: [resize, hooks, layout, listeners]
lastUpdated: 2026-08-01
---

Listen to `resize` (debounced) and store dimensions in state, or use `matchMedia` for breakpoints.

```js
useEffect(() => {
  function handleResize() {
    setWidth(window.innerWidth);
  }
  handleResize();
  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);
```

Prefer **CSS media queries** when layout only needs CSS — avoid JS re-renders for pure styling.

**Rule of thumb**

- JS resize state for charts/canvas; CSS for responsive grids.
