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

  for (lett in str1chars) {

  }
}
