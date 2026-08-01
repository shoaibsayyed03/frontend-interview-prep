---
title: "How would you design a distributed notification system?"
type: system-design
difficulty: advanced
tags: [notifications, push, email, sms, queue]
lastUpdated: 2026-08-01
---

**Pipeline:** Event → notification service → channel routers (push, email, SMS, in-app) → provider adapters (SendGrid, FCM).

**Frontend:** In-app inbox + toast; Web Push subscription registration; mark-as-read sync; preference center (per channel, per topic).

**Reliability:** Outbox pattern, retries with DLQ, idempotency keys per user+event. Template service for localized content.

**Scale:** Queue workers per channel; rate limit per user; batch digest emails.

**Rule of thumb**

- User preferences and idempotency matter as much as delivery — avoid duplicate charges and notification spam.
