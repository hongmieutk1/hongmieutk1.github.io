---
title: Object-oriented Java
topic: java-core
summary: Encapsulation, inheritance, polymorphism, and when not to inherit.
tags: [oop, classes]
updated: 2026-09-21
---

Java models behavior with **classes** and **objects**. The useful part is not the vocabulary — it is knowing which idea belongs in which place.

## Encapsulation

Keep fields private. Expose a small, honest API.

```java
public final class Money {
    private final long cents;

    public Money(long cents) {
        if (cents < 0) throw new IllegalArgumentException("cents");
        this.cents = cents;
    }

    public long cents() {
        return cents;
    }
}
```

A getter is not encapsulation by itself. Encapsulation is *protecting invariants*.

## Inheritance vs composition

Use inheritance when the subtype **is** the parent in every way the parent is used (`ArrayList` is a `List`). Prefer composition when you only need a piece of behavior.

Prefer:

```java
class OrderService {
    private final PriceCalculator prices;
}
```

over a deep `extends` tree that is hard to test.

## Polymorphism

Callers depend on an interface, not a concrete class:

```java
public interface PaymentGateway {
    void charge(Money amount);
}
```

That lets tests swap in a fake gateway without touching production code.

## Remember

- Favor immutability for values (`record`, `final` fields).
- Override `equals` and `hashCode` together, or use a `record`.
- `abstract` means “must be subclassed”; `final` means “must not”.
