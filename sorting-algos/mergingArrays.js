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

console.log(mergingArrays([1, 3, 5, 7], [2, 4, 6, 8]))
