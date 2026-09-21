---
title: Two Sum
topic: leetcode
summary: One-pass hash map, O(n) time.
tags: [array, hash-map, easy]
updated: 2026-09-21
---

**Problem:** Given `nums` and `target`, return indices of two numbers that add up to `target`. Each input has exactly one solution; you may not reuse the same element.

## Approach

While walking the array, remember `target - nums[i]` in a map from value → index. If the current number is already a remembered complement, you are done.

## Complexity

- Time: O(n)
- Space: O(n)

## Java

```java
class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int need = target - nums[i];
            if (seen.containsKey(need)) {
                return new int[] { seen.get(need), i };
            }
            seen.put(nums[i], i);
        }
        throw new IllegalArgumentException("no pair");
    }
}
```

## Notes

A nested loop is O(n²) and fine only for tiny n. Sorting would lose original indices unless you store them first — the map keeps both value and index without sorting.
