# STRUCTURAL/FACADE PATTERN

## DEFINITION

Provide a unified interface to a set of interfaces in a subsystem. Façade
defines a higher-level interface that makes the subsystem easier to use.

## EXPLANATION

The facade pattern (or façade pattern) is a software design pattern commonly
used with object-oriented programming. The name is by analogy to an
architectural facade.

A facade is an object that provides a simplified interface to a larger body of
code, such as a class library. A facade can:

-   Make a software library easier to use, understand and test, since the facade
    has convenient methods for common tasks;
-   Make the library more readable, for the same reason;
-   Reduce dependencies of outside code on the inner workings of a library,
    since most code uses the facade, thus allowing more flexibility in
    developing the system;
-   Wrap a poorly designed collection of APIs with a single well-designed API
    (as per task needs).

The Facade design pattern is often used when a system is very complex or
difficult to understand because the system has a large number of interdependent
classes or its source code is unavailable. This pattern hides the complexities
of the larger system and provides a simpler interface to the client. It
typically involves a single wrapper class which contains a set of members
required by client. These members access the system on behalf of the facade
client and hide the implementation details.

A Facade is used when an easier or simpler interface to an underlying object is
desired. Alternatively, an adapter can be used when the wrapper must respect a
particular interface and must support polymorphic behavior. A decorator makes it
possible to add or alter behavior of an interface at run-time.

1. Adapter: Converts one interface to another so that it matches what the client
   is expecting;
2. Decorator: Dynamically adds responsibility to the interface by wrapping the
   original code
3. Facade: Provides a simplified interface
