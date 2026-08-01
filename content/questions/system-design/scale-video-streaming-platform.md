---
title: "How would you scale a video streaming platform?"
type: system-design
difficulty: advanced
tags: [video, streaming, cdn, adaptive-bitrate]
lastUpdated: 2026-08-01
---

**Ingest:** Upload → transcode ladder (360p–4K) → HLS/DASH segments in object storage.

**Delivery:** CDN edge caches segments; **ABR** player (hls.js, Shaka) switches bitrate from buffer/throughput.

**Frontend player:** React shell around video element or MSE; lazy load player chunk; telemetry (startup time, rebuffering, QoE).

**Live:** Low-latency HLS/WebRTC for live; chat side channel via WebSocket.

**Scale:** Origin shield, regional POPs, peer-assisted optional; DRM for premium (Widevine).

**Rule of thumb**

- Most “streaming scale” is CDN + encoding pipeline; client job is adaptive playback and minimal main-thread work.
