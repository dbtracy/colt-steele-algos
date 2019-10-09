function sumRange(num) {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}

console.log(sumRange(100))

console.log((100 + 1) * (100 / 2))
