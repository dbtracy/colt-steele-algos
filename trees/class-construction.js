class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(val) {
    const newbie = new Node(val)
    if (!this.root) {
      this.root = newbie
      // console.log(this)
      return this
    } else {
      let curr = this.root
      while (curr) {
        if (val === curr.val) return undefined
        if (val < curr.val) {
          if (curr.left === null) {
            curr.left = newbie
            // console.log(this)
            return this
          } else curr = curr.left
        } else {
          if (curr.right === null) {
            curr.right = newbie
            // console.log(this)
            return this
          } else curr = curr.right
        }
      }
    }
  }
  find(val) {
    let curr = this.root
    while (curr) {
      if (val === curr.val) return true
      else if (val < curr.val) curr = curr.left
      else curr = curr.right
    }
    return false
  }
  breadthFirstSearch() {
    let result = []
    let queue = []

    queue.push(this.root)
    while (queue.length) {
      if (queue[0].left) queue.push(queue[0].left)
      if (queue[0].right) queue.push(queue[0].right)
      let shifted = queue.shift()
      result.push(shifted.val)
    }
    return result
  }
  dfsPreOrderIterative() {
    let result = []
    let queue = []
    let node

    queue.push(this.root)

    while (queue.length) {
      node = queue.shift()
      result.push(node.val)
      if (node.right) queue.unshift(node.right)
      if (node.left) queue.unshift(node.left)
    }
    return result
  }
  dfsPreOrderRecursive() {
    let result = []

    const traverse = node => {
      result.push(node.val)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return result
  }
  dfsPostOrderRecursive() {
    let result = []

    const traverse = node => {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      result.push(node.val)
    }

    traverse(this.root)
    return result
  }
  dfsInOrderRecursive() {
    let result = []

    const traverse = node => {
      if (node.left) traverse(node.left)
      result.push(node.val)
      if (node.right) traverse(node.right)
    }

    traverse(this.root)
    return result
  }
}

const bst = new BinarySearchTree()


bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(17)
bst.insert(9)
bst.insert(3)

console.log('PRE-ORDER:', bst.dfsPreOrderRecursive())
console.log('POST-ORDER:', bst.dfsPostOrderRecursive())
console.log('POST-ORDER:', bst.dfsInOrderRecursive())
// console.log(bst.dfsPreOrderIterative())
