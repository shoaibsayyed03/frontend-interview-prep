---
title: "How would you design a payment system (Stripe/Razorpay-style)?"
type: system-design
difficulty: advanced
tags: [payments, pci, checkout, webhooks]
lastUpdated: 2026-08-01
---

**Frontend:** Hosted fields or Stripe Elements — card data never touches your server (PCI scope reduction). Checkout UI: cart → payment method → confirm.

**Flow:** Client creates PaymentIntent (server) → client confirms → webhook `payment_intent.succeeded` → fulfill order. UI shows processing until webhook or client polling.

**Security:** Idempotency keys on create/charge; 3DS handled by provider; CSP strict on checkout page.

**Reliability:** Webhook signature verify; reconcile ledger vs provider daily; handle partial refunds in admin UI.

**Rule of thumb**

- Trust webhooks over client “success” callbacks; design idempotent order fulfillment.
