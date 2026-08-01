---
title: "How would you design a URL shortener?"
type: system-design
difficulty: intermediate
tags: [url-shortener, hashing, redirect, scale]
lastUpdated: 2026-08-01
---

**Core flow:** POST long URL → store mapping `shortCode → longUrl` → GET `/abc123` → 301/302 redirect.

**ID generation:** Base62 counter (DB sequence) or hash of URL + salt (handle collisions). Custom aliases optional.

**Storage:** KV (Redis) hot path + durable DB. TTL for expiring links.

**Frontend:** Minimal — form to create link, analytics dashboard (clicks over time). Redirect is server/CDN edge, not React.

**Scale:** Read-heavy — cache redirects at CDN; rate limit creates; geo analytics via edge logs.

**Rule of thumb**

- Use **302** when you need click analytics before redirect; **301** when permanent and SEO matters for the short link itself.
