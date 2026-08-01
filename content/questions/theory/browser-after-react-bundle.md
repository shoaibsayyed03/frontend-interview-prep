---
title: "What happens in the browser after your React bundle downloads?"
type: scenario
difficulty: advanced
tags: [browser, parsing, main-thread, react, performance]
lastUpdated: 2026-08-01
---

Strong answers connect the JS engine, React, and the browser rendering pipeline.

**1. Download and parse**

- HTML parser builds the DOM; CSS builds the CSSOM.
- Downloaded JS is parsed into an **AST**, compiled, and executed on the **main thread** — long tasks block input and paint.

**2. React runs**

- Entry executes (e.g. `createRoot().render()`).
- Components run → React builds an **element tree** (often called Virtual DOM).
- **Reconciliation** diffs with the previous tree (if any).
- Updates are **batched** and committed to the **real DOM**.

**3. Browser paints**

- Style → layout → paint → composite.
- Too many commits or layout reads/writes interleaved cause **layout thrash** and hurt **LCP** / **INP**.

**4. Async**

- When a `fetch` resolves, the callback is a **microtask/macrotask** handled by the **event loop** — state updates schedule another React render.

**Interview contrast**

- Weak: “React renders the UI.”
- Strong: “Parse → execute bundle → React reconciles → minimal DOM commit → browser paints; async work resumes via the event loop.”

**Rule of thumb**

- Tie optimizations (`useMemo`, memoized children, virtualization) to fewer commits and less main-thread work, not buzzwords alone.
