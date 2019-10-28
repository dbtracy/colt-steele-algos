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
      this.tail.next = newbie
      newbie.prev = this.tail
      this.tail = newbie
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let popped = this.tail
    if (this.length === 1) {
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
    if (this.length === 1) {
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
  get(idx) {
    if (idx < 0 || idx > this.length - 1) return null
    let curr
    if (idx > Math.floor(this.length / 2)) {
      let count = this.length - 1
      curr = this.tail
      while (count > idx) {
        curr = curr.prev
        count--
      }
    } else {
      let count = 0
      curr = this.head
      while (count < idx) {
        curr = curr.next
        count++
      }
    }
    return curr
  }
  set(idx, val) {
    let curr = this.get(idx)
    if (curr !== null) {
      curr.val = val
      return true
    }
    return false
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false
    if (idx === 0) return !!this.unshift(val)
    if (idx === this.length) return !!this.push(val)

    let newbie = new Node(val)
    let curr = this.get(idx)

    newbie.next = curr
    newbie.prev = curr.prev
    curr.prev.next = newbie
    curr.prev = newbie
    this.length++
    return true
  }
}

let list = new DoublyLinkedList()
list.push(1)
list.push(2)
list.push(3)
// list.push(4)
// list.push(5)
// list.push(6)
// list.push(7)
// list.push(8)
// list.push(9)
// list.push(10)
// list.push(11)
// list.push(12)
// list.push(13)
// list.push(14)
// console.log(list)
list.insert(1, 'YO')
console.log(list)
