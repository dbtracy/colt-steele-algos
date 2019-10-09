// write a function called minSubArrayLen which
// accepts two parameters - an array of postiive
// integers and a positive integer

// This function should return the minimal length
// of a contiguous subarray of which the sum is
// greater than or equal to the integer passed to
// the function. If there isn't one, return 0
// instead.

// Examples:

// minSubArrayLen([2,3,1,2,4,3], 7) --> 2
// minSubArrayLen([2,1,6,5,4], 9) --> 2
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) --> 1
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) --> 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) --> 5
// minSubArrayLen([4,3,3,8,1,2,3], 11) --> 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) --> 0

// Time: O(n)
// Space: O(1)

function minSubArrayLen(array, int) {
  let left = right = 0
  let sum = left === right ? array[left] : array[left] + array[right]
  let len
  while (right < array.length) {
    if (sum >= int) {
      if (len) {
        len = Math.min((right - left + 1), len)
      } else len = (right - left + 1)
      sum -= array[left]
      left++
    } else {
      right++
      sum += array[right]
    }
    // console.log(len)
  }
  if (len) return len
  else return 0
}

// approach:
// initialize left and right to 0
// initialize sum to array[left] + array[right]
// initialize len
// while right < array.length
// if sum < int, right++, sum += array[right]
// if sum > int, len = right - left + 1, and then left++

// after while loop, if int wasn't reached, return 0
// otherwise return len

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7))
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9))
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39))
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55))
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11))
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95))
