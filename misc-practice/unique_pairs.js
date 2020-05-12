// Given an unsorted array of integers, return all unique pairings of elements that add to a target sum (this is more nuanced than just returning true/false!)

/**
 *
 * Approach:
 *  -loop through array and load everything into an object
 *  -loop through again
 *
 */

const uniquePairs = function (arr, target) {
  let result = []
  let obj = {}
  for (let num of arr) {
    obj[num] = true
  }
  for (let i = 0; i < arr.length; i++) {
    if (obj[target - arr[i]]) {
      result.push([target - arr[i], arr[i]])
    }
  }
  return result
}

console.log(uniquePairs([12, 2, 2, 3, 4, 5, 5], 6))
