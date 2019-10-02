// write a function isSubsequence that takes in two strings
// and checks whether the characters in the first string form
// a subsequence of the characters in the second string. In
// other words, the function should check whether the
// characters in the first string appear somewhere in the second string

// must have at least:
// Time complexity: O(n + m)
// Space complexity: O(1)

// Examples:

// isSubsequence('hello', 'hello world')
// isSubsequence('sing', 'sting')
// isSubsequence('abc', 'abracadabra')
// isSubsequence('abc', 'acb')

function isSubsequence(str1, str2) {

  if (str1.length > str2.length) return false

  let index1 = 0
  let index2 = 0

  while (index2 < str2.length) {
    if (str2[index2] === str1[index1]) {
      index1++
      if (index1 === str1.length) return true
    }
    index2++
  }

  return false
}
console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('sing', 'sting'))
console.log(isSubsequence('abc', 'abracadabra'))
console.log(isSubsequence('abc', 'acb'))

// approach:
// loop through first and second strings
// keep track of the letter you're on in the first string
  // once you find that letter in the second string, store it, then move
  // on to the next letter in the first string and go from where you
  // left off in the second string
// if you construct the full first string, return true
// if you get to the end, return false
