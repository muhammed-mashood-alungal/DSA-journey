function detect(node, adj, visited, parent) {
    visited.add(node)

    for (let neighbor of adj[node]) {
        if (!visited.has(neighbor)) {
            detect(neighbor, adj, visited, node)
        } else if (visited.has(neighbor) && parent != neighbor) {
            return true
        }
    }
    return false
}
function isCycle(adj) {
    const visited = new Set()
    for (let node in adj) {
        if (!visited.has(node)) {
            if (detect(node, adj, visited, -1) == true) return true
        }
    }
    return false
}

const adjacencyList = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "D"],
    "D": ["B", "C", "E"],
    "E": ["D", "F"],
    "F": ["E"]
};

// const acyclicAdjacencyList = {
//     "A": ["B", "C"],
//     "B": ["A", "D"],
//     "C": ["A", "E"],
//     "D": ["B"],
//     "E": ["C", "F"],
//     "F": ["E"]
// };


console.log(isCycle(adjacencyList)); 