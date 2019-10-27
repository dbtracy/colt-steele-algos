class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
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
      newbie.prev = this.tail
      this.tail.next = newbie
      this.tail = newbie
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let popped = this.tail
    else if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = popped.prev
      this.tail.next = null
      popped.prev = null
    }
    this.length--
    return popped
  }
  shift() {
    if (!this.head) return undefined
    let shifted = this.head
    else if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = shifted.next
      this.head.prev = null
      shifted.next = null
    }
    this.length--
    return shifted
  }
  unshift(val) {
    let newbie = new Node(val)
    if (!this.head) {
      this.head = newbie
      this.tail = newbie
    } else {
      newbie.next = this.head
      this.head.prev = newbie
      this.head = newbie
    }
    length++
    return this
  }
}
