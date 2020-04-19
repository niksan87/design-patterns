# STRUCTURAL/ADAPTER PATTERN

## DEFINITION

Convert the interface of a class into another interface clients expect. Adapter
lets classes work together that couldn’t otherwise because of incompatible
interfaces.

## EXPLANATION

An adapter helps two incompatible interfaces to work together. This is the real
world definition for an adapter. Interfaces may be incompatible but the inner
functionality should suit the need. The Adapter design pattern allows otherwise
incompatible classes to work together by converting the interface of one class
into an interface expected by the clients.

The adapter pattern is useful in situations where an already existing class
provides some or all of the services you need but does not use the interface you
need. A good real life example is an adapter that converts the interface of a
Document Object Model of an XML document into a tree structure that can be
displayed.
