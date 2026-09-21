---
title: Indexes that earn their keep
topic: sql
summary: B-tree indexes speed lookups and can slow writes — use them on purpose.
tags: [indexes]
updated: 2026-09-21
---

An **index** is extra data the database maintains so it can find rows without scanning the table.

## When to add one

- Columns in `WHERE`, `JOIN`, and `ORDER BY` that are selective
- Foreign keys (so deletes and joins do not scan)
- Unique business keys (`email`, `order_number`)

## When not to

- Tiny tables
- Columns that change constantly and are rarely filtered
- Low-selectivity flags (`is_active`) used alone

## Composite order matters

For `WHERE user_id = ? AND created_at >= ?`, prefer `(user_id, created_at)`.

The leftmost prefix is what the engine can use. `(created_at, user_id)` will not help `user_id` alone.

## Check, do not guess

```sql
EXPLAIN SELECT * FROM orders WHERE customer_id = 42;
```

Look for an index scan (or index-only scan) instead of a sequential scan on a large table.

Writes pay for every index. Add the ones your queries actually use.
