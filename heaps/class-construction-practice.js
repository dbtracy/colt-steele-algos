class Heap {
  constructor() {
    this.heap = [11, 10, 9, 8, 7, 6, 5]
  }
  peek() {
    return this.heap[0]
  }
  insert(val) {
    this.heap.push(val)
    let workingIdx = this.heap.length - 1
    let parentIdx = Math.floor((workingIdx - 1) / 2)
    while (this.heap[workingIdx] > this.heap[parentIdx]) {
      let tmp = this.heap[parentIdx]
      this.heap[parentIdx] = this.heap[workingIdx]
      this.heap[workingIdx] = tmp
      workingIdx = parentIdx
      parentIdx = Math.floor((workingIdx - 1) / 2)
    }
  }
  remove() {
    let heap = this.heap
    if (heap.length === 1) {
      return heap.pop()
    }
    let tmp = heap[0]
    heap[0] = heap[heap.length - 1]
    heap[heap.length - 1] = tmp
    let popped = heap.pop()

    let wIdx = 0
    let lIdx = wIdx * 2 + 1
    let rIdx = wIdx * 2 + 2

    while (heap[wIdx] < heap[lIdx] || heap[wIdx] < heap[rIdx]) {
      let tmp = heap[wIdx]
      if (heap[lIdx] > heap[rIdx]) {
        heap[wIdx] = heap[lIdx]
        heap[lIdx] = tmp
        wIdx = lIdx
      } else {
        heap[wIdx] = heap[rIdx]
        heap[rIdx] = tmp
        wIdx = rIdx
      }
      lIdx = wIdx * 2 + 1
      rIdx = wIdx * 2 + 2
    }
    return popped
  }
}

let heap = new Heap()
console.log(heap)
heap.insert(50)
console.log(heap)
heap.insert(10)
console.log(heap)
heap.insert(10)
console.log(heap)
console.log('REMOVING:', heap.remove())
console.log(heap)
console.log('**********************')
console.log('REMOVING:', heap.remove())
console.log(heap)
console.log('**********************')
console.log('REMOVING:', heap.remove())
console.log(heap)
console.log('**********************')
console.log('REMOVING:', heap.remove())
console.log(heap)
console.log('**********************')
console.log('REMOVING:', heap.remove())
console.log(heap)
console.log('**********************')
console.log('REMOVING:', heap.remove())
console.log(heap)
console.log('**********************')
console.log('REMOVING:', heap.remove())
console.log(heap)
console.log('**********************')
console.log('REMOVING:', heap.remove())
console.log(heap)
console.log('**********************')
console.log('REMOVING:', heap.remove())
console.log(heap)
console.log('**********************')
