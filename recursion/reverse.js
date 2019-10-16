// Write recursive function called reverse which accepts
// a string and returns a new string in reverse

function reverse(string) {
  let result = ''
  if (string.length === 0) {
    return result
  }
  return reverse(string.slice(1)) + result
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

console.log(reverse('awesome'))
console.log(reverse('rithmschool'))
