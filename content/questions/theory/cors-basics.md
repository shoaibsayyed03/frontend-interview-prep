---
title: "What is CORS and how do you handle it in web apps?"
type: conceptual
difficulty: intermediate
tags: [cors, security, http, api]
lastUpdated: 2026-08-01
---

**Cross-Origin Resource Sharing** — browsers block frontend JS from reading responses from another origin unless the server allows it via headers.

**Simple requests** vs **preflight** (`OPTIONS`) for non-simple methods/headers.

Server must send e.g. `Access-Control-Allow-Origin` (specific origin, not `*` with credentials), `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`.

**Fixes**

- Configure API gateway / backend CORS correctly.
- **Dev proxy** (Vite/Next rewrite) so browser sees same origin.
- Do not “fix” CORS from the client — it is enforced by the browser.

**Rule of thumb**

- CORS is not a frontend bug — it is missing or wrong **server** headers for cross-origin XHR/fetch.
