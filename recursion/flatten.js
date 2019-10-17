// accepts array of arrays and returns new array
// with all values flattened

function flatten(array) {
  let result = []
  array.forEach(el => {
    if (typeof el === "number") {
      result.push(el)
    } else {
      result = [...result, ...flatten(el)]
    }
  })
  return result
}

console.log(flatten([1, 2, 3, [4, 5]])) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])) // [1,2,3]) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]
