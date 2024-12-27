# Unexpected Type Coercion in JavaScript

This repository demonstrates a common yet easily overlooked bug in JavaScript stemming from its loose typing system. Specifically, it highlights how the '+' operator's behavior changes depending on the operand types.  When one operand is a number and the other a string, the '+' operator performs string concatenation instead of mathematical addition.

The bug is illustrated in `bug.js`. The solution, employing explicit type checking and conversion, is presented in `bugSolution.js`.