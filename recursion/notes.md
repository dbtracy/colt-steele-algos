What is recursion?
 A process (a function) that calls itself

Recursion is everywhere!
-JSON.parse, JSON.stringify
-document.getElementByID
-DOM traversal (div inside of div inside of div)
-we will see it with more complex data structures
-sometimes cleaner alternative to iteration

The call stack

-stack DS
-FIFO
-functions are added to this structure

Base Case

-most important concept

Two essential parts of recursive function

-base case
-different input

Common Mistakes:

-no base case
-not changing input
-not returning something in the base case


Pure recursion (no helper):
-for arrays, use methods like slice, spread operator, concat to you don't mutate the arrays
-strings are immutable so you'll need methods like slice, substr, or substring to make copies
-to make copies of objects, use Object.assign, or spread operator
