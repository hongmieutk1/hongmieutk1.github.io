---
title: Collections at a glance
topic: java-core
summary: List, Set, Map — pick by access pattern, not habit.
tags: [collections]
updated: 2026-09-21
---

Pick a collection from the **question you ask the data**.

| Need | Start with |
| --- | --- |
| Ordered sequence, index access | `ArrayList` |
| Frequent insert/remove in the middle | `LinkedList` (measure first) |
| Unique values | `HashSet` |
| Unique and sorted | `TreeSet` |
| Key → value | `HashMap` |
| Key → value, insertion order | `LinkedHashMap` |

## HashMap in one sentence

Average `get` / `put` is O(1) because the key’s `hashCode` chooses a bucket, then `equals` finds the entry.

If you use a custom key, both methods must agree: equal objects, same hash.

## Iteration

Prefer the enhanced for-loop or streams for read-only passes:

```java
for (String name : names) {
    System.out.println(name);
}
```

If you must remove while iterating, use an `Iterator` (or `removeIf`).

## Threading

`ArrayList` and `HashMap` are not thread-safe. For concurrent maps, start with `ConcurrentHashMap` rather than wrapping with `Collections.synchronizedMap`.
