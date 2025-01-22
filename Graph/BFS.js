/// Q : ==== BFS in adjecency list representation of graph

// function addEdge(adj,i,j){
//     adj[i].push(j)
//     adj[j].push(i)
// }
// function bfs(adj,start){
//     const visted = new Array(adj.length).fill(false)
//     const queue = []

//     visted[start] = true
//     queue.push(start)

//     while(queue.length > 0){
//         let node = queue.shift()
//         console.log(node)

//         for(let nieghbor of adj[node]){
//             if(!visted[nieghbor]){
//                 queue.push(nieghbor)
//                 visted[nieghbor] = true
//             }
//         }
//     }
// }
// const adj = Array.from({length : 4} , ()=>[])
// console.log(adj)
// addEdge(adj,0,1)
// addEdge(adj,1,2)
// addEdge(adj,2,3)
// addEdge(adj,0,3)

// bfs(adj,2)





/// Q : BFS in matrix

// function addEdge(mat,i,j){
//     mat[i][j] = 1
//     mat[j][i] = 1
// }

// function bfs(mat,start){
//     const visited = new Array(mat.length).fill(false)

//     const queue = []

//     visited[start] = true
//     queue.push(start)

//     while(queue.length > 0){
//         let node = queue.shift()
//          console.log(node)
//         for(let i =0 ; i < mat.length ; i++){
//             if(mat[node][i] == 1 && !visited[i]){
//                 queue.push(i)
//                 visited[i] = true
//             }  
//         }
//     }
// }
// let mat = Array.from({ length: 4}, () => Array(4).fill(0));
// addEdge(mat, 0, 1);
// addEdge(mat, 0, 2);
// addEdge(mat, 1, 2);
// addEdge(mat, 2, 3);
// bfs(mat,0)