function findCycle(node, adj, visited, pathVisited) {
    visited.add(node)
    pathVisited.add(node)
    for(let neighbor of adj[node]){
        if(!visited.has(neighbor)){
            if(findCycle(neighbor,adj,visited,pathVisited)){
               return true
            }
        }else if(pathVisited.has(neighbor)){
            return true
        }
    }
    pathVisited.delete(node)
    return false
}
function isCycle(adj) {
    const visited = new Set()
    const pathVisited = new Set()
    for (let node in adj) {
        if (!visited.has(node)){
            if (findCycle(node, adj, visited, pathVisited) == true) return true
        }
    }
    return false
}



const directedAdjacencyListWithCycle = {
    "A": ["B"],
    "B": ["C"],
    "C": ["A", "D"],
    "D": ["E"],
    "E": ["F"],
    "F": ["D"]
}
console.log(isCycle(directedAdjacencyListWithCycle))
