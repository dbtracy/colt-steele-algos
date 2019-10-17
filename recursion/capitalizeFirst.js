// given an array of strings, capitalize first letter
// of each string

function capitalizeFirst(arr) {
  if (arr.length === 1) {
    console.log(arr[0][0])
    arr[0][0] = arr[0][0].toUpperCase()
    console.log(arr[0][0])
    return [arr[0]]
  } else {
    arr[0][0] = arr[0][0].toUpperCase()
    return [arr[0], ...capitalizeFirst(arr.slice(1))]
  }
}

console.log(capitalizeFirst(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']
