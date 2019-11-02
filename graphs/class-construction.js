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
  depthFirstSearchRecursive(vertex) {
    if (!vertex) return

    let result = []
    let visited = {}

    const dfs = (v) => {
      if (!this.adjacencyList[v]) return
      visited[v] = true
      result.push(v)
      for (let i = 0; i < this.adjacencyList[v].length; i++) {
        if (!visited[this.adjacencyList[v][i]]) {
          dfs(this.adjacencyList[v][i])
        }
      }
    }

    dfs(vertex)
    return result
  }
}

g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('B', 'D')
g.addEdge('C', 'E')
g.addEdge('D', 'E')
g.addEdge('D', 'F')
g.addEdge('E', 'F')
// console.log(g)

console.log('DFS:', g.depthFirstSearchRecursive('Q'))
