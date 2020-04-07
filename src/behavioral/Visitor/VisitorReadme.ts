/**
 *
 * BEHAVIORAL/VISITOR PATTERN
 *
 * DEFINITION: Represent an operation to be performed on the elements of an
 * object structure. Visitor lets you define a new operation without changing
 * the classes of the elements on which it operates.
 *
 * EXPLANATION: In object-oriented programming and software engineering, the
 * visitor design pattern is a way of separating an algorithm from an object
 * structure on which it operates. A practical result of this separation is the
 * ability to add new operations to existing object structures without modifying
 * those structures. It is one way to follow the open/closed principle.
 *
 * In essence, the visitor allows one to add new virtual functions to a family
 * of classes without modifying the classes themselves; instead, one creates a
 * visitor class that implements all of the appropriate specializations of the
 * virtual function. The visitor takes the instance reference as input, and
 * implements the goal through double dispatch.
 */