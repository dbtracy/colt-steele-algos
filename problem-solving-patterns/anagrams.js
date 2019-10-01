function validAnagram(str1, str2) {
  let str1chars = {}

  for (lett of str1) {
    str1chars[lett] ? str1chars[lett]++ : str1chars[lett] = 1
  }

  for (lett of str2) {
    if (!str1chars[lett]) {
      return false
    } else {
      str1chars[lett]--
    }
  }

  return true
}

console.log(validAnagram('aba', 'bbca'))
console.log(validAnagram('aba', 'baa'))
console.log(validAnagram('', ''))
console.log(validAnagram('', 'a'))
