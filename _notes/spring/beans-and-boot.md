---
title: Beans, IoC, and Spring Boot
topic: spring
summary: The container creates objects; Boot wires a sensible default stack.
tags: [ioc, boot]
updated: 2026-09-21
---

**Inversion of Control** means your classes do not `new` their collaborators. Spring’s container does.

## A bean is a managed object

```java
@Service
public class InvoiceService {
    private final InvoiceRepository repo;

    public InvoiceService(InvoiceRepository repo) {
        this.repo = repo;
    }
}
```

Constructor injection is the default to prefer: dependencies are required, final, and easy to test.

## What Boot adds

Spring Boot is still Spring. It adds:

- auto-configuration based on the classpath
- an embedded server (usually Tomcat)
- `application.yml` / `application.properties` for settings
- actuator, if you put it on the classpath

You still decide the domain. Boot decides the boring infrastructure unless you override it.

## Request path

A typical web call:

1. DispatcherServlet receives the HTTP request.
2. `@RestController` method runs.
3. Return value is written as JSON (Jackson).
4. Exceptions can be mapped with `@ControllerAdvice`.

```java
@RestController
@RequestMapping("/invoices")
class InvoiceController {
    private final InvoiceService invoices;

    InvoiceController(InvoiceService invoices) {
        this.invoices = invoices;
    }

    @GetMapping("/{id}")
    InvoiceResponse get(@PathVariable long id) {
        return invoices.get(id);
    }
}
```

## Config worth learning early

- profiles: `application-dev.yml`, `spring.profiles.active`
- `@ConfigurationProperties` instead of scattering `@Value`
- keep secrets out of Git; use env vars or a secret store
