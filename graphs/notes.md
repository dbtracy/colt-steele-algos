GRAPHS!

Set of nodes with set of pairs of vertices (connections)

Examples:
- social network
- location/mappoing
- routing algos
- file system optimizations
- recommendations ("people also watched", "frequently bought with")

Graph terms
- vertex: a node
- edge: connection between nodes
- weighted/unweighted: values assigned to distances between vertices
- directed/undirected: directions assigned to distances between vertices

Undirected graph:
- no direction/polarity to edges
- A to B is a connection, and so is B to A
- Facebook friend model (friend A sees friend B, vice versa)

Directed graph:
- indicated with arrows
- edges have direction
- A to B, but not B to A
- Instagram follow model (A follows B, B doesn't necessarily follow A)

Weighted graph:
- each edge has value assigned to it
- real-world map (weights are distances)
  - perhaps directed graph as well (one way streets)

Adjacency Matrix
- connections stored in rows and columns
- can use 2D array or hash table to keep track of connections

Pros/Cons of Adjacency List vs Matrix
- List
  - can take up less space in sparse graphs
  - faster to iterate over all edges
- Matrix
  - faster to look up specific edge

We will use Adjacency List!
- takes up less space
- most data in real world lends itself to sparses and/or larger graphs

GRAPH TRAVERSAL

Examples:
- P2P networking
- web crawlers
- find "closest" matches/reccomendations
- shortest path problems
  - GPS nav
  - solving mazes
  - AI
