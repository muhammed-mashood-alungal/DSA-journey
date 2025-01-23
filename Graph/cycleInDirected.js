function findCycle(node, adj, visited, pathVisited) {
    visited[node] = true
    pathVisited[node] = true

    for (let neighbor of adj[node]) {
        if (!visited[neighbor]) {
            if (findCycle(neighbor, adj , visited , pathVisited)) {
                return true
            }
        } else if (pathVisited[node]) {
            return true
        }
    }
    pathVisited[node] = 0
    return false
}
function isCycle(adj) {
    const visited = new Array(adj.length).fill(false)
    const pathVisited = new Array(adj.length).fill(false)
    for (let i = 0; i < adj.length; i++) {
        if (!visited[i]) {
            if (findCycle(i, adj, visited, pathVisited) == true) return true
        }
    }
    return false
}



const graph = [
    [1],      // Node 0 points to Node 1
    [2],      // Node 1 points to Node 2
    [0, 3],   // Node 2 points to Node 0 (cycle) and Node 3
    []        // Node 3 points to no one
]
console.log(isCycle(graph))
