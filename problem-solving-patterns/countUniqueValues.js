function countUniqueValues(array) {
  // let uniques = []
  let pointer1 = 0
  let pointer2

  while (pointer1 < array.length) {
    pointer2 = pointer1 + 1
    if (array[pointer1] === array[pointer2]) {
      array.splice(pointer2, 1)
    } else {
      // uniques.push(array[pointer1])
      pointer1++
    }
  }
  return array.length
}

// approach
// create result array
// set two pointers, one at i, one at i+1
// put in arr[i]
// if i+1 is different, i = i+1
// if i+1 is the same, increment that counter till you find something different, then set i to that
// return array

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]))

// COLT'S SOLUTION
function coltUniqueValues(arr) {
  if (arr.length === 0) return 0
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}
