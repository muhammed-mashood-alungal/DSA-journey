/// ===== Q : Shortest Path in an Unweighted Graph using Breadth-First Search (BFS)

function shortestPath(adj,src){
    const V = adj.length 
    const dist = new Array(V).fill(Infinity)

    const queue = []
    dist[src] = 0
    queue.push(src)

    while(queue.length > 0 ){
        let node = queue.shift()
        
        for(let neighbor of adj[node]){
            if(dist[node] + 1 < dist[neighbor]){
                dist[neighbor] = dist[node] +1
                queue.push(neighbor)
            }
        }
    }
    for (let i = 0; i < V; i++) {
        if (dist[i] === Infinity) {
            dist[i] = -1;
        }
    }

    return dist;
}

const adj = [
    [1, 3],     // Neighbors of node 0
    [0, 2],     // Neighbors of node 1
    [1, 6],     // Neighbors of node 2
    [0, 4],     // Neighbors of node 3
    [3, 5],     // Neighbors of node 4
    [4, 6],     // Neighbors of node 5
    [2, 5, 7, 8], // Neighbors of node 6
    [6, 8],     // Neighbors of node 7
    [6, 7]      // Neighbors of node 8
];

// Source node
const src = 0;
console.log(shortestPath(adj, src))