---
title: "How would you design a scalable chat application (WhatsApp/Slack)?"
type: system-design
difficulty: advanced
tags: [chat, websockets, real-time, messaging]
lastUpdated: 2026-08-01
---

**Frontend architecture**

- **Connection layer** — WebSocket client with reconnect, heartbeat, exponential backoff; multiplex channels/rooms.
- **State** — normalized store: `messagesByChannelId`, `usersById`; append-only message list with pagination (cursor).
- **Optimistic send** — temp id until server ack; retry failed messages.
- **Presence** — online/typing via lightweight events; debounce typing indicators.

**Backend (high level):** Message service, presence service, notification push (FCM/APNs), media upload to object storage with CDN URLs.

**Scale:** Partition by channel id; fan-out through message bus; read receipts and delivery states as separate events.

**Rule of thumb**

- Interview focus: real-time transport + normalized client cache + ordering (timestamps/server sequence) — not emoji picker UI.
