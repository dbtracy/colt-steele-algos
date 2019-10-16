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
  unshift(val) {
    let newbie = new Node(val)
    if (!this.head) {
      this.head = newbie
      this.tail = newbie
    } else {
      newbie.next = this.head
      this.head = newbie
    }
    this.length++
    return this
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null
    let count = 0
    let curr = this.head
    while (count < idx) {
      curr = curr.next
      count++
    }
    return curr
  }
  set(idx, val) {
    let curr = this.get(idx)
    if (!curr) return false
    curr.val = val
    return true
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false
    if (idx === 0) !!this.unshift(val)
    if (idx === this.length) !!this.push(val)
    let newbie = new Node(val)
    let prev = this.get(idx - 1)
    newbie.next = prev.next
    prev.next = newbie
    return true
  }
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined
    if (idx === 0) this.shift()
    if (idx === this.length) this.pop()
    let prev = this.get(idx - 1)
    let toRemove = prev.next
    prev.next = toRemove.next
    this.length--
    return toRemove
  }
  print() {
    let arr = []
    let curr = this.head
    while (curr) {
      arr.push(curr.val)
      curr = curr.next
    }
    console.log(arr)
  }
  reverse() {
    // capture first node
    let node = this.head
    // superfically/hardcode change head and tail
    this.head = this.tail
    this.tail = node
    // establish crawler variables
    let next = null
    let prev = null
    // at each node starting with the original head,
    // capture the node's next in a variable, change
    // the next value to what was previously visited
    // (null for the first one), and then move the
    // prev variable to the current node and the
    // current node to next
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}
