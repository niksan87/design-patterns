# BEHAVIORAL/ITERATOR PATTERN

## DEFINITION

Provide a way to access the elements of an aggregate object
sequentially without exposing its underlying representation.

## EXPLANATION

In object-oriented programming, the iterator pattern is a design
pattern in which an iterator is used to traverse a container and access the
container’s elements. The iterator pattern decouples algorithms from
containers; in some cases, algorithms are necessarily container-specific and
thus cannot be decoupled.
Iterators that traverse all elements of a container, very often, form the
base for more specific Iterators that allow for filtering. The .NET Framework
Linq to Objects is a good example of that.
