function hash() {
  let total = 0
  for (let char of key) {
    let value = charCodeAt(0) - 96
    total = (total + value) % arrayLen
  }
  return total
}
