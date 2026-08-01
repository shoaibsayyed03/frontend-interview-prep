---
title: "Redux vs Context API — when do you use which?"
type: conceptual
difficulty: intermediate
tags: [redux, context, state-management, zustand]
lastUpdated: 2026-08-01
---

**Context** shares values down the tree without prop drilling. It fits **static or rarely changing** data: theme, locale, authenticated user snapshot, feature flags.

**The performance trap:** When context value changes, **every consumer re-renders**, even if they only need a slice. Putting fast-changing cart or feed state in one context does not scale.

**Redux (and similar: Zustand, Jotai)** offer **selective subscriptions** — components read only the slices they need, with predictable updates and devtools.

**Can Hooks replace Redux?** Hooks replace `connect`, not the need for a store when many distant components share **frequently updated** state with fine-grained updates. Small apps: `useState` + context or colocation. Large apps: dedicated state library or server state (React Query) + minimal client global state.

**Rule of thumb**

- Context for configuration and slow-changing shared data.
- Redux/Zustand/React Query for complex, dynamic, or server-cached data.
- Context is not a drop-in global store replacement.
