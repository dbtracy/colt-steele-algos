// const arr = [1,3,5,7,9,8,6,4,2,0]
// peakSearch(arr, 4) returns 7
// peakSearch(arr, 1) returns 0
// peakSearch(arr, 11) returns -1
/**
 * Given an array with a "peak", where numbers are sorted ascending
 * to the left of a point in the array, and numbers are sorted descending
 * to the right of that point, write a function that searches the array
 * in O(log n) time.
 */

const peakSearch = function (arr, num) {
  let peak = findPeak(arr)
  // console.log('peak:', peak)
  if (!arr.length || peak === -1) return -1
  let leftAns = binarySearch(arr.slice(0, peak), num)
  let rightAns = binarySearchRev(arr.slice(peak), num)
  if (leftAns > -1 || rightAns > -1) return leftAns > rightAns ? leftAns : rightAns + peak
  return -1
}

const binarySearch = function (arr, num) {
  let left = 0, right = arr.length - 1, mid
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (arr[mid] === num) return mid
    else {
      if (arr[mid] > num) right = mid - 1
      else left = mid + 1
    }
  }
  return -1
}

const binarySearchRev = function (arr, num) {
  let left = 0, right = arr.length - 1, mid
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    if (arr[mid] === num) return mid
    else {
      if (arr[mid] > num) left = mid + 1
      else right = mid - 1
    }
  }
  return -1
}

const findPeak = function (arr) {
  let left = 0, right = arr.length - 1, mid
  while (left <= right) {
    mid = Math.floor((left + right) / 2)
    let leftSide = arr[mid - 1] || -Infinity
    let rightSide = arr[mid + 1] || -Infinity
    if (arr[mid] > leftSide && arr[mid] > rightSide) return mid
    else {
      if (leftSide < rightSide) left = mid + 1
      else right = mid - 1
    }
  }
  return -1
}

const arr = [1, 3, 5, 7, 9, 8, 6, 4, 2, 0]
console.log(peakSearch(arr, 4)) // returns 7
console.log(peakSearch(arr, 1)) // returns 0
console.log(peakSearch(arr, 11)) // returns -1
