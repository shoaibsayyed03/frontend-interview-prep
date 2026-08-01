---
title: "How would you implement a collaborative text editor in React?"
type: system-design
difficulty: advanced
tags: [real-time, crdt, websockets, collaboration]
lastUpdated: 2026-08-01
---

**Transport:** WebSocket or WebRTC data channel to a sync server; fallback to long polling.

**Document model:** CRDT (Yjs, Automerge) or OT (ShareDB) so concurrent edits merge without a single global lock. Avoid “last write wins” for text.

**React integration:** Editor surface (ProseMirror, Slate, CodeMirror) bound to a Yjs doc; awareness API for cursors and presence (name, color, selection).

**Conflicts:** CRDTs converge automatically; show presence, not conflict dialogs. Offline queue + replay on reconnect.

**Scale:** Shard rooms by document id; fan-out via pub/sub (Redis, NATS). Persist snapshots + op log to object storage.

**Rule of thumb**

- Do not build OT/CRDT from scratch in an interview — name the library, diagram client ↔ sync service ↔ storage, and discuss presence + permissions.
