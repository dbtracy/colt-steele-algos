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
}

const bst = new BinarySearchTree()


bst.insert(10)
bst.insert(5)
bst.insert(15)

console.log(bst.find(15))
console.log(bst.find(12))
