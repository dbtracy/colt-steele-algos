Node class
-key, value, left, right

DLL class
-head, tail, length

-unshift(key, val)
  -make new node
  -if list is empty
    -node is head and tail
  -else
    -node is head
    -reconnect pointers
  -length++
  -return node

-pop()
  -if list has one node
    -set head and tail to null
  -else
    -remove tail
    -reconnect pointers
  -length--

-remove(node)
  -if node is tail
    -set tail to node.prev
  -else set next node's prev to node's prev

  -if node is head
    -set head to node.next
  -else set prev node's next to node's next

  -node.next.prev = node.prev
  -node.prev.next = node.next
  -length--
  -return node

LRU CACHE CLASS
-cache = {}
-recently = new DLL()
-capacity

-get(key)
  -if node doesn't exist in cache, return -1
  -otherwise
    -remove node
    -set cache[key] to unshift(key, node.val)

-set(key, val)
  -if node exists
    -remove(node)
    -set cache[key] to unshift(key, val)
  -else
    -if under capacity (DLL length < capacity)
      -unshift(key val)
    -else
      -delete cache[DLL.tail.key]
      -DLL.pop()
      -set cache[key] to unshift(key val)




WHERE WERE MY STICKING POINTS
- forgot nodes should takes keys as well as values
- i popped node off list before deleting key from cache
- i deleted working node instead of the tail
- unnecessarily verbose remove method
  - just check if they're head or tail (look at prevs/nexts)
  - then remove their pointers and return
