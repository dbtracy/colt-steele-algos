class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  unshift(key, val) { // add to front of line (most recently used)
    const newNode = new Node(key, val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }
  pop() { // remove from back of line (least recently used)
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      this.tail = this.tail.prev;
      this.tail.next.prev = null;
      this.tail.next = null;
      this.length--;
    }
  }
  remove(node) { // cut node pointers

    // is the node the tail?
    if (node.next) node.next.prev = node.prev;
    else this.tail = node.prev;

    // is the node the head?
    if (node.prev) node.prev.next = node.next;
    else this.head = node.next;

    node.prev = null;
    node.next = null;
    this.length--;
    return node;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.recently = new DoublyLinkedList();
    this.cache = {};
  }
  get(key) {
    if (!this.cache[key]) return -1
    this.recently.remove(this.cache[key])
    this.cache[key] = this.recently.unshift(key, this.cache[key].val)
    return this.cache[key].val
  }
  put(key, value) {
    if (this.cache[key]) { // if key is already in the cache
      this.recently.remove(this.cache[key])
      this.cache[key] = this.recently.unshift(key, value)
    } else { // if key is not in the cache
      if (this.recently.length < this.capacity) {
        this.cache[key] = this.recently.unshift(key, value)
      } else {
        delete this.cache[this.recently.tail.key]
        this.recently.pop()
        this.cache[key] = this.recently.unshift(key, value)
      }
    }
  }
}
