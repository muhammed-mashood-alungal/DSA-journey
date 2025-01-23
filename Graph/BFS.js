function bfs(adj,src){
    const queue = []
    const visited = {}
    queue.push(src)
    visited[src] = true

    while(queue.length > 0){
        let node = queue.shift()
        console.log(node)

        for(let nieghbor of adj[node]){
            if(!visited[nieghbor]){
                queue.push(nieghbor)
                visited[nieghbor] = true
            }
        }
    }
}


const adjacencyList = {
    "A" : ["B","C"],
    "B" : ["A"],
    "C" : ["A","D"],
    "D" : ["C"]
}

bfs(adjacencyList,"A")