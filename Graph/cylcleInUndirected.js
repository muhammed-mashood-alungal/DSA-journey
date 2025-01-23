function detect(node , adj , visited , parent){
    visited[node] = true
    for(let neighbor of adj[node]){
        if(!visited[neighbor]){
            if (detect(neighbor, adj, visited, node)) {
                return true;
            }
        }else if(parent !== neighbor){
            return true
        }
    }
    return false
}
function isCycle(adj){
    const visited = new Array(adj.length).fill(false)

    for(let i = 0 ; i < adj.length ; i++){
        if(!visited[i]){
            if(detect(i,adj,visited, -1) == true) return true
        }
    }
    return false
}

const graph = [
    [1, 2],  // Node 0 connects to 1 and 2
    [0, 2],  // Node 1 connects to 0 and 2
    [0, 1, 3], // Node 2 connects to 0, 1, and 3
    [2]      // Node 3 connects to 2
];

console.log(isCycle(graph)); 