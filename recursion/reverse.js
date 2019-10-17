// Write recursive function called reverse which accepts
// a string and returns a new string in reverse

function reverse(string) {
  let result = ''
  if (string.length === 0) {
    return result
  } else {
    result = string[string.length - 1] + reverse(string.slice(0, string.length - 1))
  }
  return result
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

console.log(reverse('awesome'))
console.log(reverse('rithmschool'))
//
