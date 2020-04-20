# STRUCTURAL/PROXY PATTERN

## DEFINITION

Provide a surrogate or placeholder for another object to control access to it.

## EXPLANATION

A proxy, in its most general form, is a class functioning as an interface to
something else. The proxy could interface to anything:

-   a network connection
-   a large object in memory
-   a file, or some other resource that is expensive or impossible to duplicate.

In situations where multiple copies of a complex object must exist, the proxy
pattern can be adapted to incorporate the flyweight pattern in order to reduce
the application’s memory footprint. Typically, one instance of the complex
object and multiple proxy objects are created, all of which contain a reference
to the single original complex object. Any operations performed on the proxies
are forwarded to the original object. Once all instances of the proxy are out of
scope, the complex object’s memory may be deallocated.

The proxy design pattern allows you to provide an interface to other objects by
creating a wrapper class as the proxy. The wrapper class, which is the proxy,
can add additional functionality to the object of interest without changing the
object’s code. Below are some of the common examples in which the proxy pattern
is used:

-   Adding security access to an existing object. The proxy will determine if
    the client can access the object of interest.
-   Providing interface for remote resources, such as web service or REST
    resources
-   Coordinating expensive operations on remote resources by asking the remote
    resources to start the operation as soon as possible before accessing the
    resources
-   Adding a thread-safe feature to an existing class without changing the
    existing class’s code.

In short, the proxy is the object that is being called by the client to access
the real object behind the scene.
