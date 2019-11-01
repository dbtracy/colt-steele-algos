class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(name) {
    if (!this.adjacencyList[name]) this.adjacencyList[name] = []
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }
}

g = new Graph()
g.addVertex('Tokyo')
g.addVertex('San Francisco')
g.addVertex('Dallas')
console.log(g)
g.addEdge('Tokyo', 'San Francisco')
console.log(g)
g.addEdge('Dallas', 'San Francisco')
console.log(g)
