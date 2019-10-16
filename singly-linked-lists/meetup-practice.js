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

  }
}
