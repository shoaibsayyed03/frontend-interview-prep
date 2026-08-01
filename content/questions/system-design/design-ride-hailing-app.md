---
title: "How would you design a ride-hailing app (Uber/Ola)?"
type: system-design
difficulty: advanced
tags: [maps, geolocation, real-time, matching]
lastUpdated: 2026-08-01
---

**Client (rider/driver):** Map SDK, live GPS updates (throttled), trip state machine (requested → matched → en route → completed).

**Real-time:** WebSocket for driver location and trip status; fallback polling.

**Matching:** Server-side geospatial index (H3, geohash) — frontend shows ETA from quotes API, not local matching logic.

**Frontend concerns:** Battery-aware location updates; offline queue for status; deep links for active trip recovery.

**Scale:** Shard by city; surge pricing from demand/supply service; separate read models for map tiles vs trip API.

**Rule of thumb**

- Split **map rendering** from **trip domain state**; never trust client GPS for billing without server smoothing.
