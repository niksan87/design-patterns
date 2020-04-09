# BEHAVIORAL/COMMAND PATTERN

## DEFINITION

Encapsulate a request as an object, thereby letting you
parameterize clients with different requests, queue or log requests, and
support undoable operations.

## EXPLANATION

In object-oriented programming, the command pattern is a
behavioral design pattern in which an object is used to represent and
encapsulate all the information needed to call a method at a later time. This
information includes the method name, the object that owns the method and
values for the method parameters.

Four terms always associated with the command pattern are command, receiver,
invoker and client. A command object has a receiver object and invokes a
method of the receiver in a way that is specific to that receiver’s class.
The receiver then does the work. A command object is separately passed to an
invoker object, which invokes the command, and optionally does bookkeeping
about the command execution. Any command object can be passed to the same
invoker object. Both an invoker object and several command objects are held
by a client object. The client contains the decision making about which
commands to execute at which points. To execute a command, it passes the
command object to the invoker object.

Using command objects makes it easier to construct general components that
need to delegate, sequence or execute method calls at a time of their
choosing without the need to know the class of the method or the method
parameters. Using an invoker object allows bookkeeping about command
executions to be conveniently performed, as well as implementing different
modes for commands, which are managed by the invoker object, without the need
for the client to be aware of the existence of bookkeeping or modes.
