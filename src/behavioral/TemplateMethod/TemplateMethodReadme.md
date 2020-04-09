# BEHAVIORAL/TEMPLATE METHOD PATTERN

## DEFINITION

Define the skeleton of an algorithm in an operation, deferring
some steps to subclasses. Template Method lets subclasses redefine certain
steps of an algorithm without changing the algorithm’s structure.

## EXPLANATION

In the template method of this design pattern, one or more
algorithm steps can be overridden by subclasses to allow differing behaviors
while ensuring that the overarching algorithm is still followed.
In object-oriented programming, first a class is created that provides the
basic steps of an algorithm design. These steps are implemented using
abstract methods. Later on, subclasses change the abstract methods to
implement real actions. Thus the general algorithm is saved in one place but
the concrete steps may be changed by the subclasses.
The Template Method pattern thus manages the larger picture of task
semantics, and more refined implementation details of selection and sequence
of methods. This larger picture calls abstract and non-abstract methods for
the task at hand. The non-abstract methods are completely controlled by the
template method, but the abstract methods, implemented in subclasses, provide
the pattern’s expressive power and degree of freedom. Template Method’s
abstract class may also define hook methods that may be overridden by
subclasses. Some or all of the abstract methods can be specialized in a
subclass, allowing the writer of the subclass to provide particular behavior
with minimal modifications to the larger semantics. The template method (that
is non-abstract) remains unchanged in this pattern, ensuring that the
subordinate non-abstract methods and abstract methods are called in the
originally intended sequence.
