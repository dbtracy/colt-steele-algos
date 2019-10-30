class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    const newbie = new Node(val)
    if (!this.first) {
      this.first = newbie
      this.last = newbie
    }
    else {
      newbie.next = this.first
      this.first = newbie
    }
    return ++this.size
  }
  pop() {
    let oldFirst = this.first
    if (!this.first) return null
    else if (this.size === 1) {
      oldFirst = this.first
      this.first = this.tail = null
    }
    else {
      oldFirst = this.first
      this.first = oldFirst.next
    }
    this.size--
    return oldFirst.val
  }
}

const stack = new Stack()
stack.push(0)
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack)
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack)
console.log(stack.pop())
