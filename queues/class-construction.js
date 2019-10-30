class Node {
  constructor(val) {
    this.val = val
    this.next = this.next
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  enqueue(val) {
    let newbie = new Node(val)
    if (!this.last) {
      this.last = this.first = newbie
    } else {
      this.last.next = newbie
      this.last = newbie
    }
    return ++this.size
  }
  dequeue() {
    if (!this.first) return null

    let oldFirst = this.first
    if (this.size === 1) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return oldFirst.val
  }
}

const queue = new Queue()
console.log("******")
queue.enqueue(0)
console.log(queue)
queue.enqueue(1)
console.log(queue)
queue.enqueue(2)
console.log(queue)
console.log("******")
console.log(queue.dequeue())
console.log(queue)

// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
