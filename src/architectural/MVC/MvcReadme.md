# ARCHITECTURAL/MVC

## DEFINITION

Model–view–controller (usually known as MVC) is a software design pattern
commonly used for developing user interfaces which divides the related program
logic into three interconnected elements. This is done to separate internal
representations of information from the ways information is presented to and
accepted from the user. This kind of pattern is used for designing the layout of
the page.

## EXPLANATION

### Model

The central component of the pattern. It is the application's dynamic data
structure, independent of the user interface. It directly manages the data,
logic and rules of the application.

### View

Any representation of information such as a chart, diagram or table. Multiple
views of the same information are possible, such as a bar chart for management
and a tabular view for accountants.

### Controller

Accepts input and converts it to commands for the model or view. In addition to
dividing the application into these components, the model–view–controller design
defines the interactions between them.

The model is responsible for managing the data of the application. It receives
user input from the controller. The view means presentation of the model in a
particular format. The controller responds to the user input and performs
interactions on the data model objects. The controller receives the input,
optionally validates it and then passes the input to the model.

As with other software patterns, MVC expresses the "core of the solution" to a
problem while allowing it to be adapted for each system. Particular MVC designs
can vary significantly from the traditional description here.
