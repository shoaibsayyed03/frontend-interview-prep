---
title: "What is prop drilling and how do you avoid it?"
type: conceptual
difficulty: beginner
tags: [props, context, composition, state]
lastUpdated: 2026-08-01
---

**Prop drilling** is passing props through many intermediate components that do not use them, only to reach a deep child.

**Alternatives**

1. **Component composition** — pass `children` or render props so middle layers stay dumb.
2. **Context** — for theme, user, locale (slow-changing).
3. **Colocate state** — lift only as high as needed; split trees.
4. **External store** — Redux/Zustand for wide, dynamic state.
5. **Route loaders / server components** — fetch close to where data is rendered.

**Rule of thumb**

- Drilling a few levels is fine; refactor when it hurts readability or causes churn.
