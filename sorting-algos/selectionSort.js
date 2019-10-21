function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let mindex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[mindex]) mindex = j
    }
    if (i !== mindex) {
      let temp = arr[i]
      arr[i] = arr[mindex]
      arr[mindex] = temp
    }
  }
  return arr
}

// TIME COMPLEXITY: O(n^2)

console.log(selectionSort([5, 3, 6, 3, 567, 432, 2]))
console.log(selectionSort([5, 4, 3, 2, 1]))
console.log(selectionSort([1, 9, 4, 5, 100]))
