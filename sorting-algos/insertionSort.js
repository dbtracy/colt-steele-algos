function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > curr; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = curr
  }
  return arr
}

// TIME COMPLEXITY: O(n^2)
// for nearly sorted: O(n)
// also good for incoming data

console.log(insertionSort([4, 2, 4, 6, 32, 1, 0]))
