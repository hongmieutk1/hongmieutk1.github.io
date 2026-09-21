# Study hub

Static GitHub Pages site. Pages are Markdown. GitHub builds it with Jekyll.

## Preview locally

```bash
bundle install
bundle exec jekyll serve
```

Open [http://127.0.0.1:4000](http://127.0.0.1:4000).

## Add a note

1. Create `_notes/<topic>/my-note.md`.
2. Use front matter:

```yaml
---
title: Title on the page
topic: java-core
summary: One line for lists
tags: [optional, tags]
updated: 2026-09-21
---
```

Topics: `java-core`, `spring`, `sql`, `system-design`, `leetcode`.

3. Write the body in Markdown. Push to `main`. Pages will publish at `https://hongmieutk1.github.io`.

## Edit the introduction

Change `index.md`. Site name and GitHub handle live in `_config.yml`. Topic labels live in `_data/topics.yml`.
