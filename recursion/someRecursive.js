// function accepts array and callback, returns
// true if single value in array returns true when
// passed to callback, otherwise false

function someRecursive(arr, fn) {
  if (arr.length === 1) {
    return fn(arr[0])
  } else {
    return fn(arr[0]) || someRecursive(arr.slice(1), fn)
  }
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)) // true
console.log(someRecursive([4, 6, 8, 9], isOdd)) // true
console.log(someRecursive([4, 6, 8], isOdd)) // false
console.log(someRecursive([4, 6, 8], val => val > 10)) // false
