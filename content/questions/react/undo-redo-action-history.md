---
title: "How would you implement undo/redo in a React drawing or form builder?"
type: coding
difficulty: advanced
tags: [undo-redo, immutability, state-history, performance]
lastUpdated: 2026-08-01
---

**Data structure:** Two stacks — `past[]` and `future[]`. Current state is `present`. On action, push `present` to `past`, set new `present`, clear `future`.

```jsx
function useUndoRedo(initial) {
  const [past, setPast] = useState([]);
  const [present, setPresent] = useState(initial);
  const [future, setFuture] = useState([]);

  const set = useCallback((next) => {
    setPast((p) => [...p, present]);
    setPresent(typeof next === "function" ? next(present) : next);
    setFuture([]);
  }, [present]);

  const undo = () => {
    if (!past.length) return;
    const previous = past[past.length - 1];
    setPast((p) => p.slice(0, -1));
    setFuture((f) => [present, ...f]);
    setPresent(previous);
  };

  const redo = /* symmetric */;

  return { present, set, undo, redo, canUndo: past.length > 0 };
}
```

**Performance:** Cap stack size (e.g. 50); store **patches** (Immer patches, JSON Patch) instead of full document clones for large canvases.

**Rule of thumb**

- Batch rapid strokes into one history entry with debounce so undo removes a gesture, not every pixel event.
