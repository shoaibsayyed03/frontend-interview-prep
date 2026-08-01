---
title: "How would you architect the frontend for a calendar app (Google Calendar-style)?"
type: system-design
difficulty: advanced
tags: [calendar, scheduling, state, performance]
lastUpdated: 2026-08-01
---

**Views:** Day/week/month/agenda — each maps time range → visible events. Virtualize month grid and time columns for long ranges.

**State model:** Normalized `eventsById`, indices by `calendarId` and time range. Fetch **windowed** events for visible range only; prefetch adjacent weeks on navigation.

**Timezone:** Store UTC on server; convert at UI boundary with `Intl` / Temporal; all-day events as date-only type.

**Interactions:** Drag-create and drag-move with optimistic updates; conflict detection from server; recurring rules expanded server-side or via RRULE library.

**Sync:** WebSocket or polling for shared calendar changes; etag/version per calendar for incremental sync.

**Rule of thumb**

- Calendar UIs are **range queries + virtualization + timezone correctness** — not a single giant events array in React state.
