# BEHAVIORAL/MEMENTO PATTERN

## DEFINITION

Without violating encapsulation, capture and externalize an
object’s internal state so that the object can be restored to this state
later.

## EXPLANATION

The memento pattern is implemented with three objects: the
originator, a caretaker and a memento. The originator is some object that has
an internal state. The caretaker is going to do something to the originator,
but wants to be able to undo the change. The caretaker first asks the
originator for a memento object. Then it does whatever operation (or sequence
of operations) it was going to do. To roll back to the state before the
operations, it returns the memento object to the originator. The memento
object itself is an opaque object (one which the caretaker cannot, or should
not, change). When using this pattern, care should be taken if the originator
may change other objects or resources – the memento pattern operates on a
single object.
