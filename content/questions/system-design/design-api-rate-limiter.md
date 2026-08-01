---
title: "How would you design an API rate limiter?"
type: system-design
difficulty: intermediate
tags: [rate-limiting, redis, token-bucket, api-gateway]
lastUpdated: 2026-08-01
---

**Algorithms:** Token bucket or sliding window — allow bursts but cap sustained QPS per user/API key/IP.

**Implementation:** Redis `INCR` + TTL or Lua script for atomic window; edge rate limiting at API gateway (Kong, Envoy) before app servers.

**Client UX:** Return `429` with `Retry-After`; exponential backoff in SDKs; show friendly “slow down” in UI.

**Tiers:** Free vs paid quotas; global vs per-route limits (auth login stricter than read).

**Rule of thumb**

- Rate limit at the edge first; synchronize counters in Redis for distributed app nodes.
