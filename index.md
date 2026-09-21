---
layout: home
title: Home
---

<p class="eyebrow">Hello</p>
# I'm Truong Kiet

I use this site as a quiet desk for software study: a short introduction, then notes I actually want to reread.

I care about **backend work** — Java, Spring, SQL — and about the habits that sit next to the code: clear system design, and solving problems on paper before jumping into an editor.

<div class="topic-grid">
  <a class="topic-card" href="{{ '/topics/java-core/' | relative_url }}">
    <strong>Java Core</strong>
    <span>Language, collections, OOP, and the JVM.</span>
  </a>
  <a class="topic-card" href="{{ '/topics/spring/' | relative_url }}">
    <strong>Spring</strong>
    <span>Boot, beans, APIs, and data access.</span>
  </a>
  <a class="topic-card" href="{{ '/topics/sql/' | relative_url }}">
    <strong>SQL</strong>
    <span>Queries you can explain, not just run.</span>
  </a>
  <a class="topic-card" href="{{ '/topics/system-design/' | relative_url }}">
    <strong>System Design</strong>
    <span>Trade-offs, not buzzwords.</span>
  </a>
  <a class="topic-card" href="{{ '/topics/leetcode/' | relative_url }}">
    <strong>LeetCode</strong>
    <span>Problem notes with Java solutions.</span>
  </a>
</div>

## How I study

- Write the idea in Markdown while it is still fresh.
- Prefer a short note I will reopen over a long dump I will ignore.
- Keep examples small enough to type from memory.

## Add a note

Create a file under `_notes/<topic>/your-title.md` with this front matter:

```yaml
---
title: Two Sum
topic: leetcode
summary: Hash map in one pass.
tags: [array, hash-map]
updated: 2026-09-21
---
```

Valid `topic` values: `java-core`, `spring`, `sql`, `system-design`, `leetcode`.

The [library]({{ '/notes/' | relative_url }}) lists everything automatically after GitHub Pages rebuilds.
