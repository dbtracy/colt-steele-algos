function bubbleSort(arr) {
  let noSwaps
  function swap(x, y) {
    const temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      noSwaps = true
      if (arr[j] > arr[j + 1]) {
        noSwaps = false
        swap(j, j + 1)
      }
      if (noSwaps) break
    }
  }

  return arr
}

// TIME COMPLEXITY: O(n^2) for unoptimized, O(n) for optimized on a nearly sorted array

console.log(bubbleSort([4, 5, 1, 10, 3, 2, 6]))
console.log(bubbleSort([8, 9, 10, 1, 2, 3, 5]))
console.log(bubbleSort([5, 4, 3, 2, 1]))
