---
title: "Why is my React app slow, and how would you fix it?"
type: scenario
difficulty: intermediate
tags: [react, performance, profiling, interview-scenario]
lastUpdated: 2026-08-01
---

Start by **measuring** (React DevTools Profiler, Lighthouse, Web Vitals), then classify the slowness: **first load**, **interaction**, or **scroll/list**.

**1. Initial load (bundle and network)**

- Large JS bundle → **code splitting**, dynamic imports, remove unused libraries.
- Waterfall fetches → colocate data fetching (Server Components, route loaders, React Query with parallel queries).
- Heavy images → optimize formats, lazy-load, reserve space for CLS.

**2. Unnecessary re-renders**

- React re-renders when state or props change down the tree.
- Fix: **colocate state**, split components, `React.memo`, stable props with `useMemo` / `useCallback` where profiling shows waste.
- Understand **render vs commit** — wasted render work still costs CPU even if DOM unchanged.

**3. Reconciliation and list cost**

- Large lists → **virtualization** (`react-window`, TanStack Virtual), stable **keys**, avoid inline object/function props to memoized children.

**4. Main-thread work**

- Expensive work in render or synchronous effects → move to **Web Workers**, debounce input, use **transitions** (`startTransition`) for non-urgent updates.

**5. Memory and leaks**

- Subscriptions, timers, and fetches without cleanup → fix `useEffect` cleanups; Strict Mode helps catch these in dev.

**Interview phrasing examples**

- Instead of “it re-renders too much”: “Props identity changes every parent render; I’d stabilize callbacks or split the subtree.”
- Instead of “bundle is big”: “Route-level splits so the dashboard chunk loads only after auth.”
- Instead of “slow on mobile”: “Improve LCP with SSR/SSG for shell, defer non-critical JS, optimize hero image.”

**Rule of thumb**

- Always name **one profiler finding** and **one concrete change** before listing techniques.
