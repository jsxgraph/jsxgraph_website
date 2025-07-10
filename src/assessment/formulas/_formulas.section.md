The _Formulas plugin_ ([dynamiccourseware.org](https://dynamiccourseware.org)) for Moodle is a powerful question type that allows the creation of complex mathematical questions with multiple answer fields. It supports algebraic expressions, units, random variables, and conditional logic, making it ideal for STEM subjects. The plugin can be extended with interactive elements such as JSXGraph constructions for dynamic visualization and value exchange.

## Formulas extension for the Moodle JSXGraph filter

The _Formulas extension for the Moodle JSXGraph filter_ enables the integration of JSXGraph constructions into formulas questions by facilitating the exchange of values between the question and the graphical construction.

[Formulas extension for the Moodle JSXGraph filter](https://github.com/jsxgraph/moodleformulas_jsxgraph) on Github.

## Random variables

In the Formulas question type for Moodle, random variables are used to generate dynamic and individualized questions for each student. These variables are defined in the question’s “Global variables” section and can be used throughout the question text, answer fields, and feedback. 

![Random variables](/media/images/formulas/formulas-1.png)

By incorporating random values, educators can create a wide variety of problem instances from a single question template, enhancing both assessment security and students’ conceptual understanding.

## Binding

In the context of the Formulas question type with JSXGraph integration, binding refers to the dynamic connection between variables in the question and elements in the interactive JSXGraph construction. This two-way data binding allows values calculated in the Formulas question (e.g., from random variables or student input) to be passed into the JSXGraph applet, where they can control points, shapes, or functions. 

![Binding](/media/images/formulas/formulas-2.png)

Conversely, values from the JSXGraph construction—such as coordinates of movable points—can be sent back to the Formulas question for use in automatic evaluation or feedback. This seamless exchange enables highly interactive and responsive math questions.

## Example

In this example, the coordinates of a triangle’s vertices are initially defined using random variables, and students are asked to adjust the vertices within the JSXGraph construction so that the triangle attains a specified target area.

![Example with formulas](/media/images/formulas/formulas-3.png)


