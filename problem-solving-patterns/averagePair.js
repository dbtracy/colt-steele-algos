// write a function called averagePair, where, given a sorted array of
// integers and a target average, determine if there is a pair of values
// in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.

// Bonus constraints:

// Time: O(n)
// Space: O(1)

// Examples:

// averagePair([1,2,3],2.5)
// averagePair([1,3,3,5,6,7,10,12,19],8)
// averagePair([-1,0,3,4,5,6],4.1)
// averagePair([],4)

function averagePair(array, average) {
  let left = 0
  let right = array.length - 1
  let sum
  let sumAv

  while (left < right) {
    sum = array[left] + array[right]
    sumAv = sum / 2
    console.log(array[left], array[right], sumAv)
    if (sumAv === average) {
      return true
    } else if (sumAv < average) {
      left++
    } else (
      right--
    )
  }

  return false
}

console.log(averagePair([1, 2, 3], 2.5))
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8))
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))
console.log(averagePair([], 4))
