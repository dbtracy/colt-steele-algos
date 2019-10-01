// Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solutions must have O(N) time complexity

// Sample inputs:
// sameFrequency(182, 281) --> true
// sameFrequency(34, 14) --> false
// sameFrequency(3589578, 5879385) --> true
// sameFrequency(22, 222) --> false

function sameFrequency(int1, int2) {
  let num1 = String(int1)
  let num2 = String(int2)
  let digits = {}

  for (let i = 0; i < num1.length; i++) {
    let digit = num1[i]
    digits[num1[i]] ? digits[digit] += 1 : digits[digit] = 1
  }

  for (let i = 0; i < num2.length; i++) {
    let digit = num2[i]
    if (!(digits[digit])) {
      return false
    } else {
      digits[digit] -= 1
    }
  }

  if (Object.values(digits).includes(1)) return false

  return true
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(222, 22))
