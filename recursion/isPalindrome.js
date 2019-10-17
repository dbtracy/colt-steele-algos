// Write a recursive function called isPalidrome which returns true
// if the string passed to it is a palindrome, otherwise
// return false

function isPalindrome(string) {
  if (string.length <= 1) {
    return true
  } else {
    let first = string[0]
    let last = string[string.length - 1]
    if (first === last) {
      return isPalindrome(string.slice(1, string.length - 1))
    } else return false
  }
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false
console.log(isPalindrome('a'))
console.log(isPalindrome(''))
console.log(isPalindrome('aa'))
