LRU cache

Classes
-Node
-DLL
-LRU

1. Node class (key, val)
  - key
  - val
  - prev
  - next

2. Doubly Linked List()
  - head, tail, length
  - UNSHIFT(key, val)
    - make new node
    - if list is empty, set to head and tail
    - if not, make node the head and change pointers accordingly
    - increment length
    - return node
  - POP()
    - if there's only one node, set head, tail to null, length to 0
    - if not, set tail to null, change pointers for new tail accordingly
  - REMOVE(node)
    - if node is tail, set tail to node.prev, otherwise, set next node's prev to node.prev
    - if node is head, set head to node.next, otherwise, set prev node's next to node.next
    - cut node pointers
    - decrease length
    - return node

3. LRU Cache(capacity)
  - capacity, recently (DLL), cache
  - GET(key)
    - if key's not in the cache, return -1
    - recently.remove the node
    - set cache[key] to recently.unshift(key, val)
    - return val
  - PUT(key, value)
    - if key is in cache
      - .remove(node)
      - set cache[key] to recently.unshift(key, val)
    - if key is not in cache
      - if we're under capacity, just set in cache and .unshift it on
      - otherwise
        - delete cache[recently.tail.key]
        - recently.pop()
        - set cache[key] to recently.unshift(key, val)
