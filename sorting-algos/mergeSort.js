function mergingArrays(arr1, arr2) {
  let result = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i])
      i++
    } else {
      result.push(arr2[j])
      j++
    }
  }
  if (i < arr1.length) result = [...result, ...arr1.slice(i)]
  if (j < arr2.length) result = [...result, ...arr2.slice(j)]
  return result
}

function mergeSort(arr) {
  if (arr.length < 2) return arr
  let front = arr.slice(0, Math.floor(arr.length / 2))
  let back = arr.slice(Math.floor(arr.length / 2))

  return mergingArrays(mergeSort(front), mergeSort(back))
}

// TIME COMPLEXITY: O(n log n)
// O(log n) decompositions (splits), O(n) comparisons per decomposition
// SPACE COMPLEXITY: O(n)

console.log(mergeSort([4, 3, 6, 7, 88, 3, 452, 12, 0]))
console.log(mergeSort([5, 4, 3, 2, 1]))
