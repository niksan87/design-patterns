# STRUCTURAL/COMPOSITE PATTERN

## DEFINITION

Compose objects into tree structures to represent part-whole hierarchies.
Composite lets clients treat individual objects and compositions of objects
uniformly.

## EXPLANATION

When dealing with Tree-structured data, programmers often have to discriminate
between a leaf-node and a branch. This makes code more complex, and therefore,
error prone. The solution is an interface that allows treating complex and
primitive objects uniformly. In object-oriented programming, a composite is an
object designed as a composition of one-or-more similar objects, all exhibiting
similar functionality. This is known as a “has-a” relationship between objects.
The key concept is that you can manipulate a single instance of the object just
as you would manipulate a group of them. The operations you can perform on all
the composite objects often have a least common denominator relationship. For
example, if defining a system to portray grouped shapes on a screen, it would be
useful to define resizing a group of shapes to have the same effect (in some
sense) as resizing a single shape.

Composite should be used when clients ignore the difference between compositions
of objects and individual objects. If programmers find that they are using
multiple objects in the same way, and often have nearly identical code to handle
each of them, then composite is a good choice; it is less complex in this
situation to treat primitives and composites as homogeneous.
