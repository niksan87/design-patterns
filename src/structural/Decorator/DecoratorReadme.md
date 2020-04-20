# STRUCTURAL/DECORATOR PATTERN

## DEFINITION

Attach additional responsibilities to an object dynamically. Decorators provide
a flexible alternative to subclassing for extending functionality.

## EXPLANATION

The decorator pattern can be used to extend (decorate) the functionality of a
certain object statically, or in some cases at run-time, independently of other
instances of the same class, provided some groundwork is done at design time.
This is achieved by designing a new decorator class that wraps the original
class. This wrapping could be achieved by the following sequence of steps:

-   Subclass the original “Component” class into a “Decorator” class (see UML
    diagram);
-   In the Decorator class, add a Component pointer as a field;
-   Pass a Component to the Decorator constructor to initialize the Component
    pointer;
-   In the Decorator class, redirect all “Component” methods to the “Component”
    pointer;
-   In the ConcreteDecorator class, override any Component method(s) whose
    behavior needs to be modified. This pattern is designed so that multiple
    decorators can be stacked on top of each other, each time adding a new
    functionality to the overridden method(s).

Note that decorators and the original class object share a common set of
features. In the UML diagram, the “operation()” method was available in both the
decorated and undecorated versions.

The decoration features (e.g., methods, properties, or other members) are
usually defined by an interface, mixin (a.k.a. “trait”) or class inheritance
which is shared by the decorators and the decorated object. In the UML diagram
the class “Component” is inherited by both the “ConcreteComponent” and the
subclasses that descend from “Decorator”.

The decorator pattern is an alternative to subclassing. Subclassing adds
behavior at compile time, and the change affects all instances of the original
class; decorating can provide new behavior at run-time for individual objects.

This difference becomes most important when there are several independent ways
of extending functionality. In some object-oriented programming languages,
classes cannot be created at runtime, and it is typically not possible to
predict, at design time, what combinations of extensions will be needed. This
would mean that a new class would have to be made for every possible
combination. By contrast, decorators are objects, created at runtime, and can be
combined on a per-use basis. The I/O Streams implementations of both Java and
the .NET Framework incorporate the decorator pattern.
