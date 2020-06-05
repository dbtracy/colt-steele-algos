class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

let arr1 = [1, 2, 3, 4, 5, 6, 7]
let list1 = new Node(arr1[0])
let curr = list1
for (let i = 1; i < arr1.length; i++) {
  curr.next = new Node(arr1[i])
  curr = curr.next
}

const printList = function (head) {
  let arr = []
  while (head) {
    arr.push(head.val)
    head = head.next
  }
  return arr
}

const revListTillLast = function (head) {
  if (!head || !head.next) return head
  let prev = null, curr = head, next, newHead
  while (curr.val !== 5) {
    if (curr.next.val === 5) newHead = curr.next
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  head.next = newHead
  console.log(printList(prev))
  return prev
}



revListTillLast(list1)
