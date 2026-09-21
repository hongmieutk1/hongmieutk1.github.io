---
title: Caching in a request path
topic: system-design
summary: Cache to save work, then decide what happens when the cache is wrong.
tags: [cache, latency]
updated: 2026-09-21
---

Caching stores a **faster copy** of something expensive: a query, a rendered page, a remote call.

## Where it sits

```
Client → CDN → App → Redis → Database
```

Closer to the client means faster hits and harder invalidation.

## Common patterns

| Pattern | Behavior |
| --- | --- |
| Cache-aside | App reads DB on miss, then fills the cache |
| Write-through | Write cache and DB together |
| TTL | Entries expire after a time, even if still “true” |

Cache-aside is the usual starting point for application data.

## The hard part is freshness

Ask, before you cache:

- How wrong can this be, and for how long?
- What is the key? (`userId`, `url`, query hash)
- What happens on stampede when a hot key expires?

For a stampede, reuse one fill (locking / singleflight) or keep a slightly stale value while refresh runs.

## Rule of thumb

Cache **read-heavy, slow, and acceptable-to-lag** data. Do not cache the source of truth for money, inventory, or anything that must be exact *right now* unless you have a clear invalidation story.
