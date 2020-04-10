# CREATIONAL/ABSTRACT FACTORY PATTERN

## DEFINITION

Provide an interface for creating families of related or dependent objects
without specifying their concrete classes.

## EXPLANATION

The factory determines the actual concrete type of object to be created, and it
is here that the object is actually created (in C++, for instance, by the new
operator). However, the factory only returns an abstract pointer to the created
concrete object.

This insulates client code from object creation by having clients ask a factory
object to create an object of the desired abstract type and to return an
abstract pointer to the object.

As the factory only returns an abstract pointer, the client code (that requested
the object from the factory) does not know — and is not burdened by — the actual
concrete type of the object that was just created. However, the type of a
concrete object (and hence a concrete factory) is known by the abstract factory;
for instance, the factory may read it from a configuration file. The client has
no need to specify the type, since it has already been specified in the
configuration file. In particular, this means:

The client code has no knowledge whatsoever of the concrete type, not needing to
include any header files or class declarations related to it. The client code
deals only with the abstract type. Objects of a concrete type are indeed created
by the factory, but the client code accesses such objects only through their
abstract interface. Adding new concrete types is done by modifying the client
code to use a different factory, a modification that is typically one line in
one file. The different factory then creates objects of a different concrete
type, but still returns a pointer of the same abstract type as before — thus
insulating the client code from change. This is significantly easier than
modifying the client code to instantiate a new type, which would require
changing every location in the code where a new object is created (as well as
making sure that all such code locations also have knowledge of the new concrete
type, by including for instance a concrete class header file). If all factory
objects are stored globally in a singleton object, and all client code goes
through the singleton to access the proper factory for object creation, then
changing factories is as easy as changing the singleton object.
