// given an array of integers and a number, write a function
// which finds the maximum sum of a subarray with the length
// of the number passed to the function

// Note that a subarray must consist of consecutive elements
// from the original array. In the first example below, [100,
// 200, 300] is a subarray of the original array, but [100, 300]
// is not

// Examples:

// maxSubarraySum([100,200,300,400], 2) --> 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) --> 39
// maxSubarraySum([-3,4,0,-2,6,-1], 2) --> 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) --> 5
// maxSubarraySum([2,3], 3) --> null

// Constraints:

// Time: O(n)
// Space: O(1)

function maxSubarraySum(array, sublen) {

  if (array.length < sublen) return null

  let max = -Infinity
  let left = 0
  let right = left + sublen - 1
  let sum = 0
  for (let i = 0; i <= right; i++) {
    sum += array[i]
  }
  while (right < array.length) {
    max = Math.max(max, sum)
    sum -= array[left]
    left++
    right++
    sum += array[right]
  }
  return max
}

// approach:
// initialize max to -Infinity
// initialize left to 0 and right to left + sublen - 1
// initialize sum to sum of elements from left to right
// while sublen < array length
// max = Math.max(max, sum)
// sum -= left, left++
// right++, sum += right

console.log(maxSubarraySum([100, 200, 300, 400], 2))
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4))
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2))
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2))
console.log(maxSubarraySum([2, 3], 3))
