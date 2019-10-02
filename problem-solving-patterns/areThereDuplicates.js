// implement a function which accepts a variable number of
//  arguments and checks whether there are any duplicates
// among the arguments passed in
//
// you can solve this using frequency counter pattern OR multiple pointers pattern

// Examples:
// areThereDuplicates(1, 2, 3) --> false
// areThereDuplicates(1, 2, 2) --> true
// areThereDuplicates('a', 'b', 'c', 'a') --> true

// restrictions:
// Time - O(n)
// Space - O(n)

// bonus:
// time - O(n log n)
// Space - O(1)

function areThereDuplicates() {
  let values = {}

  for (arg of arguments) {
    values[arg] ? values[arg] += 1 : values[arg] = 1
  }

  for (value in values) {
    if (values[value] > 1) return true
  }

  return false
}

// Approach:
// use arguments operator
//

console.log(areThereDuplicates(1, 2, 3, 3))
