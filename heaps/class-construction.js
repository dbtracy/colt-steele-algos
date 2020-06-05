class MaxBinaryHeap {
  constructor() {
    this.values = []
  }
  insert(val) {
    this.values.push(val)
    let idx = this.values.length - 1
    let parentIdx = Math.floor((idx - 1) / 2)
    let workingNode = this.values[idx]
    let parentNode = this.values[parentIdx]

    while (workingNode > parentNode) {
      this.values[parentIdx] = workingNode
      this.values[idx] = parentNode
      idx = parentIdx
      parentIdx = Math.floor((idx - 1) / 2)
      workingNode = this.values[idx]
      parentNode = this.values[parentIdx]
    }
  }
  extract() {
    // EDGE CASE
    if (this.values.length === 1) {
      return this.values.pop()
    }
    // MAIN CODE
    let start = this.values[0]
    this.values[0] = this.values[this.values.length - 1]
    this.values[this.values.length - 1] = start
    let popped = this.values.pop()

    let workingIdx = 0
    let leftIdx = workingIdx * 2 + 1
    let rightIdx = workingIdx * 2 + 2
    let temp

    while (this.values[workingIdx] < this.values[leftIdx] || this.values[workingIdx] < this.values[rightIdx]) {
      temp = this.values[workingIdx]
      if (this.values[leftIdx] > this.values[rightIdx]) {
        this.values[workingIdx] = this.values[leftIdx]
        this.values[leftIdx] = temp
        workingIdx = leftIdx
      } else {
        this.values[workingIdx] = this.values[rightIdx]
        this.values[rightIdx] = temp
        workingIdx = rightIdx
      }
      leftIdx = workingIdx * 2 + 1
      rightIdx = workingIdx * 2 + 2
    }
    return popped
  }

}

let heap = new MaxBinaryHeap()
heap.insert(10)
console.log(heap.values)
heap.insert(20)
console.log(heap.values)
heap.insert(3)
console.log(heap.values)
heap.insert(8)
console.log(heap.values)
heap.insert(14)
console.log(heap.values)
heap.insert(65)
console.log(heap.values)
heap.insert(40)
console.log(heap.values)
heap.insert(38)
console.log(heap.values)
heap.insert(12)
console.log(heap.values)
heap.insert(12)
console.log(heap.values)
heap.insert(19)
console.log(heap.values)
heap.insert(21)
console.log(heap.values)
heap.insert(15)
console.log(heap.values)
console.log(heap.extract())
console.log(heap.values)
