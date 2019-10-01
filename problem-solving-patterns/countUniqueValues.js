function countUniqueValues(array) {
  let uniques = []
  let index = 0

  while (index < array.length - 2) {
    let point2 = index + 1

    if (array[point2] === array[index]) {
      point2++
    } else {
      uniques.push(array[index])
      index++
    }
  }
}

// approach
// create result array
// set two pointers, one at i, one at i+1
// put in arr[i]
// if i+1 is different, i = i+1
// if i+1 is the same, increment that counter till you find something different, then set i to that
// return array
