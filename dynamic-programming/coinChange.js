/**
 * write a function that determines the number of ways you can obtain the value
 * from the given collection of denominations (number of different ways you can make change)
 */

const denominations = [1, 5, 10, 25]

function coinChange(denoms, amt, memo) {
  if (amt < 5) return 1;

  let dynArr = [0, 1, 1, 1, 1, 1];

  for (let coin of denoms) {
    if (amt >= coin) {

    }
  }
}


console.log(coinChange(denominations, 1)) // 1
console.log(coinChange(denominations, 2)) // 1
console.log(coinChange(denominations, 5)) // 2
console.log(coinChange(denominations, 10)) // 4
console.log(coinChange(denominations, 15)) // ??
console.log(coinChange(denominations, 25)) // 13
console.log(coinChange(denominations, 45))
console.log(coinChange(denominations, 100))
console.log(coinChange(denominations, 145))
console.log(coinChange(denominations, 1451))
console.log(coinChange(denominations, 14511))
