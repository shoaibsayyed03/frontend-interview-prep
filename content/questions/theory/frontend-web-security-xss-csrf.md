---
title: "How do you prevent XSS, CSRF, and related frontend security issues?"
type: scenario
difficulty: intermediate
tags: [security, xss, csrf, csp, jwt]
lastUpdated: 2026-08-01
---

**XSS** — untrusted input rendered as HTML/JS. Prevent: escape output, avoid `dangerouslySetInnerHTML`, use CSP, sanitize rich text with a vetted library.

**CSRF** — forged requests using the user’s session. Prevent: SameSite cookies, CSRF tokens on state-changing forms, verify `Origin`/`Referer` server-side.

**JWT in localStorage** — readable by any script after XSS. Prefer **httpOnly** session cookies from your API; short-lived access tokens if SPA + BFF.

**CSP** — restrict script/style sources; reduce inline script risk.

**Clickjacking** — `X-Frame-Options` / CSP `frame-ancestors`.

**Uploads** — validate type/size client-side for UX; **never trust client** — scan and validate server-side.

**Rule of thumb**

- Security is shared with backend; frontend’s job is not to introduce XSS sinks and not to store secrets where XSS can steal them.
