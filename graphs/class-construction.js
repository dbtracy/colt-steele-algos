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
  removeEdge(v1, v2) {
    let v1List = this.adjacencyList[v1]
    let v2List = this.adjacencyList[v2]
    this.adjacencyList[v1] = v1List.filter(el => el !== v2)
    this.adjacencyList[v2] = v2List.filter(el => el !== v1)
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
g.removeEdge('Dallas', 'San Francisco')
console.log(g)
g.removeEdge('Tokyo', 'San Francisco')
console.log(g)
