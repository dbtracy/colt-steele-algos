// Write recursive fibonacci sequence that returns the nth
// fib number

// 1, 1, 2, 3, 5, 8, etc

function fib(n) {
  if (n === 1) return 1
  if (n === 2) return 1
  return fib(n - 1) + fib(n - 2)
}


console.log(fib(4))
console.log(fib(10))
console.log(fib(28))
console.log(fib(35))
