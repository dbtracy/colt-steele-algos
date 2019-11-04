HEAPS

Max binary heap
- root is largest number in tree
- no order, children are just smaller than parent
- node has at most two children
- as compact as possible
  - all chilrden are as full as possible
  - left children filled out first

Min binary hep
- same idea, root is smallest number in tree
- children larger than parent

Importance of heaps
- priority queues!
- graph traversal algorithms

Storing a binary heap
- can use array
- use some math to find nodes/children
- Math for children:
  - for any index n,
    - left child is at index 2n + 1
    - right child is at index 2n + 2
- Math for parents:
  - for any index n, parent is at Math.floor((n-1)/2)
