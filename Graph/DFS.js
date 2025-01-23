// Q : DFS in  adjecency list representation of graph

// function addEdge(adj,i,j){
//     adj[i].push(j)
//     adj[j].push(i)
// }

// function dfsTravesal(adj,start){
//     const visited = new Array(adj.length)
//     const result  = []

//     function dfs(node){
//         visited[node] = true
//         result.push(node)
//         console.log(node)
//         for(let nieghbor of adj[node]){
//             if(!visited[nieghbor]){
//                 dfs(nieghbor)
//             }
//         }
//     }
//     dfs(start)
//     return result
// }

// const adjList = Array.from({ length: 4 }, () => [])
// addEdge(adjList, 0, 1)
// addEdge(adjList, 0, 2)
// addEdge(adjList, 1, 2)
// addEdge(adjList, 2, 3)

// Perform DFS starting from node 0
// const dfsResultAdjList = dfsTravesal(adjList, 0)
// console.log("DFS Traversal (Adjacency List):", dfsResultAdjList)


// Q : DFS in  adjecency matrix representation of graph

// function addEdge(mat,i,j){
//     mat[i][j] = 1
//     mat[j][i] = 1
// }
// function dfsAdjMatrix(adj,start){
//     const visited = new Array(adj.length).fill(false)
//     const result = []

//     function dfs(node){
//         visited[node] = true
//         result.push(node)
//         console.log(node)

//         for(let i =0 ; i< adj.length ; i++){
//             if(mat[node][i] == 1 && !visited[i]){
//                 dfs(i)
//             }
//         }
//     }
//     dfs(start)
//     return result
// }

// const V = 4;
// let mat = Array.from({ length: V }, () => Array(V).fill(0));
// addEdge(mat, 0, 1);
// addEdge(mat, 0, 2);
// addEdge(mat, 1, 2);
// addEdge(mat, 2, 3);

// // Perform DFS starting from node 0
// const dfsResultAdjMatrix = dfsAdjMatrix(mat, 0);
// console.log("DFS Traversal (Adjacency Matrix):", dfsResultAdjMatrix);

function dfs(adjacencyList,src){
 

    const visited = new Set()

    function dfsHelper(node){
       visited.add(node)
       console.log(node)

       for(let nieghbor of adjacencyList[node]){
        if(!visited.has(nieghbor)){
            dfsHelper(nieghbor)
        }
       }
    }
    dfsHelper(src)
    return
    
}

const adjacencyList = {
    "A" : ["B","C"],
    "B" : ["A"],
    "C" : ["A","D"],
    "D" : ["C"]
}

dfs(adjacencyList,"A")