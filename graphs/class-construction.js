class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2)
    this.adjacencyList[v2].push(v1)
  }
  removeEdge(v1, v2) {
    let v1List = this.adjacencyList[v1]
    let v2List = this.adjacencyList[v2]
    this.adjacencyList[v1] = v1List.filter(el => el !== v2)
    this.adjacencyList[v2] = v2List.filter(el => el !== v1)
  }
  remove(vertex) {
    let edges = this.adjacencyList[vertex]
    edges.forEach(connection => this.removeEdge(vertex, connection))
    delete this.adjacencyList[vertex]
  }
}

g = new Graph()
g.addVertex('Tokyo')
g.addVertex('Minneapolis')
g.addVertex('Dallas')
g.addEdge('Tokyo', 'Minneapolis')
g.addEdge('Dallas', 'Minneapolis')
console.log(g)
g.remove('Tokyo')
console.log(g)
