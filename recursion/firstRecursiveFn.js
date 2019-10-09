function countDown(num) {
  if (num < 1) {
    console.log('All done!')
  } else {
    console.log(num)
    return countDown(num - 1)
  }
}

countDown(5)
