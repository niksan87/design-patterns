/**
 *
 * BEHAVIORAL/STRATEGY (POLICY) PATTERN
 *
 * DEFINITION: Define a family of algorithms, encapsulate each one, and make
 * them interchangeable. Strategy lets the algorithm vary independently from
 * clients that use it.
 *
 * EXPLANATION: In computer programming, the strategy pattern (also known as the
 * policy pattern) is a software design pattern that enables an algorithm’s
 * behavior to be selected at runtime.
 *
 * The strategy pattern:
 * 1. Defines a family of algorithms; 
 * 2. Encapsulates each algorithm;
 * 3. Makes the algorithms interchangeable within that family;
 *
 * Strategy lets the algorithm vary independently from clients that use it.
 * For instance, a class that performs validation on incoming data may use a
 * strategy pattern to select a validation algorithm based on the type of data,
 * the source of the data, user choice, or other discriminating factors. These
 * factors are not known for each case until run-time, and may require radically
 * different validation to be performed. The validation strategies, encapsulated
 * separately from the validating object, may be used by other validating
 * objects in different areas of the system (or even different systems) without
 * code duplication.
 */