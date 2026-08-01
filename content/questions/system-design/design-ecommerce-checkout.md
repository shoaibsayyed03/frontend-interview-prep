---
title: "How would you design an e-commerce checkout system?"
type: system-design
difficulty: advanced
tags: [ecommerce, checkout, cart, orders]
lastUpdated: 2026-08-01
---

**Frontend steps:** Cart → shipping → payment → confirmation. Single checkout state machine; guard invalid transitions.

**Cart:** Server-authoritative cart id (guest cookie or user account); optimistic UI with version/conflict handling on merge.

**Inventory:** Reserve stock at payment start; release on timeout; never oversell — server validates on submit.

**Payment:** Provider SDK + webhooks; order id idempotency key.

**Performance:** Code-split checkout route; prefetch shipping rates when address valid; skeleton for summary panel.

**Rule of thumb**

- Checkout is a **transaction saga** — cart, tax, shipping, payment, fulfillment — with compensating actions on failure.
