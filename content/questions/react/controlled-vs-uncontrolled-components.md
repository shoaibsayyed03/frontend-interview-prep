---
title: "What are controlled vs uncontrolled components?"
type: conceptual
difficulty: beginner
tags: [forms, controlled, uncontrolled, refs]
lastUpdated: 2026-08-01
---

**Controlled:** React state is the source of truth. The input’s `value` comes from state and `onChange` updates state.

```jsx
const [email, setEmail] = useState("");
<input value={email} onChange={(e) => setEmail(e.target.value)} />;
```

**Uncontrolled:** The DOM holds the value. You read it when needed (submit) via a ref.

```jsx
const inputRef = useRef(null);
<input ref={inputRef} defaultValue="" />;
// on submit: inputRef.current.value
```

**When to use which**

- Controlled: validation as you type, disabling submit, dependent fields, single source of truth.
- Uncontrolled: simple forms, integrating non-React widgets, file inputs (often uncontrolled).

**Rule of thumb**

- Prefer controlled for most React forms.
- Do not mix `value` and `defaultValue` on the same input.
