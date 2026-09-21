---
title: Joins and how to read them
topic: sql
summary: Inner, left, and when a join accidentally becomes a filter.
tags: [joins]
updated: 2026-09-21
---

A **join** matches rows from two tables using a condition, usually a foreign key.

## Inner join

Only rows that match on both sides.

```sql
SELECT o.id, c.name
FROM orders o
INNER JOIN customers c ON c.id = o.customer_id;
```

Orders without a customer (broken data) disappear.

## Left join

Keep every row from the left table. Missing matches become `NULL` on the right.

```sql
SELECT c.name, o.id
FROM customers c
LEFT JOIN orders o ON o.customer_id = c.id;
```

This is how you find customers with no orders: `WHERE o.id IS NULL`.

## The accidental filter

This left join behaves like an inner join:

```sql
LEFT JOIN orders o ON o.customer_id = c.id
WHERE o.status = 'PAID'
```

`WHERE` runs after the join and drops `NULL` statuses. Put the extra condition in `ON` if you still want unmatched left rows.

## Mental model

1. Start from the table you must not lose.
2. Join outward.
3. Filter last, and watch `NULL`.
