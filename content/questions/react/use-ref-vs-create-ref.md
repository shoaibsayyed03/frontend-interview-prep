---
title: "What is the difference between useRef and createRef?"
type: conceptual
difficulty: beginner
tags: [useRef, createRef, refs, hooks]
lastUpdated: 2026-08-01
---

**`createRef`** creates a ref object once (typically on a class instance). It does not persist automatically across function re-renders unless stored on an instance.

**`useRef`** returns the same ref object for the life of a function component instance. Updating `.current` does not trigger a re-render.

```js
const inputRef = useRef(null);
inputRef.current?.focus();
```

**Beyond DOM:** store mutable values (timer id, previous prop) without causing renders.

**Rule of thumb**

- Function components: always `useRef`.
- `createRef` mainly with class components.
