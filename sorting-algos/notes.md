What is sorting?

-process of rearranging items in collection (array) so that items are in some kind of order

Examples:
-numbers smallest to largest
-names alphabetically
-movies based on release year
-movies based on revenue

Why learn it?
-sorting is a very common task; good to know how it works
-many different ways to sort things; each algo has pros and cons
-classic interview topic

Objectives:
-implement:
  -bubble sort
  -selection sort
  -insertion sort
-understand why it's important to learn these simple sorting algos

Telling Javascript how to sort
-built-in sort method accepts optional comparator function
-use this comparator function to tell JS how to sort
-comparator looks at pairs of elements (a and b), determines sort order
  based on return value
  -if it returns a negative number, a should come before b
  -if positive, a comes after b
  -if 0, a and b are the same


THE FASTER SORT METHODS

-improve time from O(n^2) to O(n log n)
-tradeoff between efficiency and simplicity
-generally take longer to understand
