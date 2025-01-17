# CREATIONAL/PROTOTYPE PATTERN

## DEFINITION

Specify the kind of objects to create using a prototypical instance, and create
new objects by copying this prototype.

# EXPLANATION

The prototype pattern is a creational design pattern in software development. It
is used when the type of objects to create is determined by a prototypical
instance, which is cloned to produce new objects.

This pattern is used to:

-   Avoid subclasses of an object creator in the client application, like the
    abstract factory pattern does;
-   Avoid the inherent cost of creating a new object in the standard way (e.g.,
    using the ‘new’ keyword) when it is prohibitively expensive for a given
    application.

To implement the pattern, declare an abstract base class or interface that
specifies a pure virtual clone() method. Any class that needs a“polymorphic
constructor” capability derives itself from the abstract base class or
interface, and implements the clone() operation.

The client, instead of writing code that invokes the “new” operator on a
hard-coded class name, calls the clone() method on the prototype, calls a
factory method with a parameter designating the particular concrete derived
class desired, or invokes the clone() method through some mechanism provided by
another design pattern.
