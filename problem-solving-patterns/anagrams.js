function validAnagram(str1, str2) {
  let str1chars = {}
  let str2chars = {}

  for (lett of str1) {
    if (str1chars[lett]) {
      str1chars[lett]++
    } else {
      str1chars[lett] = 1
    }
  }

  for (lett of str2) {
    if (str2chars[lett]) {
      str2chars[lett]++
    } else {
      str2chars[lett] = 1
    }
  }

  for (key in str1chars) {
    if (!(key in str2chars) || str1chars[key] !== str2chars[key]) {
      return false
    }
  }

  for (key in str2chars) {
    if (!(key in str1chars) || str2chars[key] !== str1chars[key]) {
      return false
    }
  }

  return true
}

console.log(validAnagram('aba', 'bbca'))
console.log(validAnagram('aba', 'baa'))
console.log(validAnagram('', ''))
console.log(validAnagram('', 'a'))
