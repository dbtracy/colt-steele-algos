class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newbie = new Node(val)
    if (!this.head) {
      this.head = newbie
      this.tail = newbie
    } else {
      this.tail.next = newbie
      this.tail = newbie
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if (!this.head) return undefined
    let oldHead = this.head
    this.head = oldHead.next
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return oldHead
  }
}

let list = new SinglyLinkedList()
list.push('hi')
list.push('there')
console.log(list.shift())
console.log(list)
console.log(list.shift())
console.log(list)
