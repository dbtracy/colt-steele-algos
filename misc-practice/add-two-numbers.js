class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var addTwoNumbers = function (l1, l2) {
  let l1Len = getLen(l1);
  let l2Len = getLen(l2);
  let offset = Math.abs(l1Len - l2Len);
  if (l2Len > l1Len) [l1, l2] = [l2, l1]; // l1 will always be the longer one
  let dummyHead = new ListNode(0);
  dummyHead.val = getCarry(l1, l2, dummyHead, offset);

  return dummyHead.val == 1 ? dummyHead : dummyHead.next;
};

function getCarry(l1, l2, node, offset) {
  console.log('L1:', l1)
  console.log('L2:', l2)
  console.log('OFFSET:', offset)
  if (l1 == null || l2 == null) return 0;
  node.next = new ListNode(0);
  let sum = 0;
  if (offset > 0) sum = l1.val + getCarry(l1.next, l2, node.next, offset - 1);
  else sum = l1.val + l2.val + getCarry(l1.next, l2.next, node.next, offset - 1);

  node.next.val = sum % 10;
  console.log('CURRENT NODE:', node)
  console.log('SUM:', sum)
  console.log('CARRY:', parseInt(sum / 10))
  return parseInt(sum / 10); // return the carry
}

function getLen(root) {
  let len = 0;
  while (root) {
    len++;
    root = root.next;
  }
  return len;
}

const one = new ListNode(7)
one.next = new ListNode(2)
one.next.next = new ListNode(4)
one.next.next.next = new ListNode(3)

const two = new ListNode(5)
two.next = new ListNode(6)
two.next.next = new ListNode(4)

var printList = function (list) {
  let curr = list
  let result = []
  while (curr) {
    result.push(curr.val)
    curr = curr.next
  }
  return result
}

addTwoNumbers(one, two)

// console.log(printList(addTwoNumbers(one, two)))
