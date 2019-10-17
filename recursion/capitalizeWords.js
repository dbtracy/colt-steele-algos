// given an array of words, return new array
// containing each word capitalized


function capitalizeWords(arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()]
  } else {
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)))
  }
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
