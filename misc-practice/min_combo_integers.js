// Find a pair of integers (one from each array) such that the difference between them is the minimum of all the possible combinations.

/**
 *
 * @param {*} arr1
 * @param {*} arr2
 *
 * Approach:
 * - loop through arr1
 *    - set minArr = []
 *    - set minVal = Infinity
 *   - loop through arr2
 *     - set subMinArr = []
 *     - set subMinVal = Infinity
 *     - if abs(arr1[i]-arr2[j]) < minVal
 *        - minArr = [arr1[i], arr2[j]]
 *        - minVal = abs(arr1[i] - arr2[j])
 *     - set minArr and minVal to whichever's better
 *
 */

const minCombo = function (arr1, arr2) {
  let minArr = []
  let minVal = Infinity
  for (let i = 0; i < arr1.length; i++) {
    let subMinArr = []
    let subMinVal = Infinity
    for (let j = 0; j < arr2.length; j++) {
      let diff = Math.abs(arr1[i] - arr2[j])
      if (diff < subMinVal) {
        subMinArr = [arr1[i], arr2[j]]
        subMinVal = diff
      }
    }
    if (subMinVal < minVal) {
      minArr = subMinArr
      minVal = subMinVal
    }
  }
  return minArr
}

console.log(minCombo([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])) // [5,6]
console.log(minCombo([2, 4, 6, 8], [1, 3, 5, 7, 9])) // [2,1]
console.log(minCombo([1, 100, 1000, 10000], [80, 800, 80000])) // [100,80]
