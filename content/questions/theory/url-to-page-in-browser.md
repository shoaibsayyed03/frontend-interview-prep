---
title: "What happens when you type a URL and press Enter?"
type: scenario
difficulty: intermediate
tags: [browser, networking, critical-rendering-path, dns]
lastUpdated: 2026-08-01
---

Interviewers want the **pipeline**, not “the page loads.”

**1. Navigation and DNS**

- Browser parses the URL (scheme, host, path).
- **DNS lookup** resolves the hostname (browser/OS cache, then recursive DNS).
- TCP (and TLS for HTTPS) connection to the server.

**2. Request and response**

- HTTP request sent with headers, cookies, cache validators.
- Server returns status, headers, and body (HTML for a document navigation).
- Browser may use **HTTP cache** if the response is still fresh.

**3. HTML parsing and DOM**

- Parser builds the **DOM** token by token.
- External resources discovered (`link`, `script`, `img`) may trigger more requests.
- **`async` / `defer` / blocking** scripts change whether parsing pauses.

**4. CSS and render tree**

- CSS downloaded and parsed into **CSSOM**.
- DOM + CSSOM → **render tree** (what gets painted; hidden nodes omitted).
- CSS is **render-blocking** by default — why FOUC matters and why critical CSS helps.

**5. Layout, paint, composite**

- **Layout** (reflow): compute geometry.
- **Paint**: fill pixels.
- **Composite**: layers merged on screen — this is when the user sees content.

**6. JavaScript**

- JS runs on the main thread; long tasks delay paint and input (**INP**).
- Frameworks (React) hydrate or mount after the document and bundles load.

**Strong vs weak answers**

- Weak: “The server sends the page and React renders it.”
- Strong: “DNS → connect → HTML → DOM; CSS blocks until CSSOM; render tree → layout → paint; JS runs with defined blocking rules; only then is the app interactive.”

**Rule of thumb**

- Mention **one** optimization hook (defer JS, preload LCP image, reduce blocking CSS) tied to a step in this chain.
