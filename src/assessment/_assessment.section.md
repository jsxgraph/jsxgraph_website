Digital assessment is playing an increasingly central role in both school and university mathematics education. 
Beyond the automation of grading, modern assessment systems are capable of interpreting student input at a symbolic level, allowing for more nuanced evaluations and richer feedback. 
This capability enables a shift from assessing final answers alone to analyzing the structure and reasoning behind students’ solutions.

# Visual input with JSXGraph

Traditional digital assessment systems like STACK rely on students entering mathematical expressions in algebraic form. 
These inputs are evaluated symbolically, allowing for precise feedback on correctness, structure, and underlying misconceptions. 
This approach is well-suited for tasks involving algebra, calculus, and symbolic manipulation.

In contrast, visual input methods using JSXGraph enable students to interact with geometric objects directly. 
Instead of typing expressions, learners manipulate constructions, move points, or adapt function graphs in a coordinate system. 
This opens new possibilities for assessing spatial reasoning, geometric understanding, and problem-solving strategies that are difficult to capture through symbolic input alone.

Combining both approaches—algebraic and visual—can provide a more complete picture of student understanding and make digital assessment more accessible, especially for visual learners.

## STACK

_STACK_ is a server-based assessment system for mathematics that evaluates student input using symbolic algebra in Moodle or ILIAS courses. 
It allows learners to enter answers as mathematical expressions, which are then automatically analyzed and checked for correctness, structure, and equivalence.

JSXGraph can be integrated into STACK questions to enable interactive, visual input. 
This allows students to move geometric figures, drag points, or manipulate parameters of functions directly within the question—adding a dynamic, visual dimension to traditional formula-based assessment.

- [STACK-Assessment](https://stack-assessment.org)
- [STACK Docs JSXGraph](https://docs.stack-assessment.org/en/Specialist_tools/JSXGraph/)

## Formulas

_Formulas_ is a Moodle question type that supports algebraic input, symbolic evaluation, randomization, and automated feedback—making it well-suited for both formative and summative assessment.

Interactive elements—such as JSXGraph constructions—can be embedded to enable visual input and dynamic manipulation within Formulas questions. 
The _Formulas extension_ for the _Moodle JSXGraph filter_ facilitates the two-way exchange of values between the question logic and the interactive JSXGraph diagrams.


- [Formulas question type](https://dynamiccourseware.org)
- [Formulas extension for Moodle JSXGraph filter](https://github.com/jsxgraph/moodleformulas_jsxgraph)
- [Moodle JSXGraph filter](https://moodle.org/plugins/filter_jsxgraph)
