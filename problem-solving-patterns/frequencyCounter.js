const frequencyCounter = function (arr1, arr2) {
  let squares = {}
  for (num of arr1) {
    let squaredNum = num ** 2
    if (squares[squaredNum]) {
      squares[squaredNum]++
    } else {
      squares[squaredNum] = 1
    }
  }

  for (num of arr2) {
    if (squares[num]) {
      squares[num]--
      if (squares[num] === 0) {
        delete squares[num]
      }
    } else {
      return false
    }
  }

  if (Object.keys(squares)) return false
  return true
}

console.log(frequencyCounter([1, 2, 3], [4, 1, 9]))

// create squares object
// loop through first array
  // square each number and add it to squares object
  // if it already exists, increment it
// loop through second array
  // for each element, check and see if it exists in the object
  // if it does, delete one from the object
    // if it's down to zero, delete it
  // if it doesn't return false
