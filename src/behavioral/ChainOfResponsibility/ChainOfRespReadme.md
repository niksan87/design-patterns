# BEHAVIORAL/COMMAND PATTERN

## DEFINITION

Avoid coupling the sender of a request to its receiver by giving
more than one object a chance to handle the request. Chain the receiving
objects and pass the request along the chain until an object handles it.

## EXPLANATION

In object-oriented design, the chain-of-responsibility pattern is
a design pattern consisting of a source of command objects and a series of
processing objects. Each processing object contains logic that defines the
types of command objects that it can handle; the rest are passed to the next
processing object in the chain. A mechanism also exists for adding new
processing objects to the end of this chain.

In a variation of the standard chain-of-responsibility model, some handlers
may act as dispatchers, capable of sending commands out in a variety of
directions, forming a tree of responsibility. In some cases, this can occur
recursively, with processing objects calling higher-up processing objects
with commands that attempt to solve some smaller part of the problem; in this
case recursion continues until the command is processed, or the entire tree
has been explored. An XML interpreter might work in this manner.
