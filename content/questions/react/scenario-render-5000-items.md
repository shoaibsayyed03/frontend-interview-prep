---
title: "You receive 5000 items in one API response. How do you render them?"
type: scenario
difficulty: intermediate
tags: [virtualization, pagination, performance, lists]
lastUpdated: 2026-08-01
---

**Do not** mount 5,000 DOM nodes or 5,000 React rows because the API returned everything at once. **Lazy loading images ≠ list virtualization** — hiding rows with CSS still keeps a heavy DOM.

**1. Reduce what the client must hold (API design)**

- Prefer **pagination** (`?page=1&limit=50`) or **cursor** APIs so the client never needs all 5,000 records at once.
- If the backend must send a bulk export, treat it as a **download/job**, not a live list UI.

**2. Virtualize the viewport**

- Render only **visible rows + overscan** with `react-window`, `@tanstack/react-virtual`, or similar.
- Fixed or measured row heights simplify scrolling; dynamic heights need measurement/cache.

**3. Pagination in the UI**

- “Load more” or numbered pages with a modest page size (25–100).
- Keeps memory and reconciliation cost predictable.

**4. Data layer**

- Store items in a **normalized structure**; avoid duplicating giant arrays in React state on every filter.
- For filtering/sorting 5k client-side, consider **Web Workers** or pre-indexed data — but still **virtualize** the view.

**5. What not to do**

- `display: none` on off-screen rows — still in DOM, still hurts memory and diffing.
- Single giant table without scroll container strategy on mobile.

**Rule of thumb**

- Say out loud: **“API pagination first; if all data must be client-side, virtualize the list.”**
