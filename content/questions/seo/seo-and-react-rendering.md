---
title: "How does SEO work with React CSR vs SSR vs pre-rendering?"
type: conceptual
difficulty: intermediate
tags: [seo, csr, ssr, prerender, react]
lastUpdated: 2026-08-01
---

Search engines can execute JavaScript, but **CSR-only** apps may delay indexing and show weak previews if HTML is an empty shell until JS runs.

**SSR / SSG / ISR** ship meaningful HTML on first response — better for crawlers, social link previews, and LCP.

**Pre-rendering** (static export, prerender plugins) generates HTML at build time for marketing pages.

**React-specific**

- Use semantic HTML, real `<title>` and meta via framework metadata APIs.
- Avoid hiding critical text only in client-only effects.
- Monitor Core Web Vitals — ranking and UX correlate.

**Rule of thumb**

- Public content pages: server-rendered or static HTML; authenticated app shells: CSR acceptable.
