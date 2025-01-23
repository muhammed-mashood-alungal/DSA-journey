// /// ===== Q : Shortest Path in an Unweighted Graph using Breadth-First Search (BFS)

// function shortestPath(adj,src){
//     const V = adj.length 
//     const dist = new Array(V).fill(Infinity)

//     const queue = []
//     dist[src] = 0
//     queue.push(src)

//     while(queue.length > 0 ){
//         let node = queue.shift()

//         for(let neighbor of adj[node]){
//             if(dist[node] + 1 < dist[neighbor]){
//                 dist[neighbor] = dist[node] +1
//                 queue.push(neighbor)
//             }
//         }
//     }
//     for (let i = 0; i < V; i++) {
//         if (dist[i] === Infinity) {
//             dist[i] = -1;
//         }
//     }

//     return dist;
// }

// const adj = [
//     [1, 3],     // Neighbors of node 0
//     [0, 2],     // Neighbors of node 1
//     [1, 6],     // Neighbors of node 2
//     [0, 4],     // Neighbors of node 3
//     [3, 5],     // Neighbors of node 4
//     [4, 6],     // Neighbors of node 5
//     [2, 5, 7, 8], // Neighbors of node 6
//     [6, 8],     // Neighbors of node 7
//     [6, 7]      // Neighbors of node 8
// ];

// // Source node
// const src = 0;
// console.log(shortestPath(adj, src))


/// =============================================================================================


// javascript Program to find Dijkstra's shortest path using
// priority_queue in STL
const INF = 2147483647;

// This class represents a directed graph using
// adjacency list representation
// class Graph {

//     constructor(V){

//         // No. of vertices
//         this.V = V;

//         // In a weighted graph, we need to store vertex
//         // and weight pair for every edge
//         this.adj = new Array(V);
//         for(let i = 0; i < V; i++){
//             this.adj[i] = new Array();
//         }
//     }

//     addEdge(u, v, w)
//     {
//         this.adj[u].push([v, w]);
//         this.adj[v].push([u, w]);
//     }

//     // Prints shortest paths from src to all other vertices
//     shortestPath(src)
//     {
//         // Create a priority queue to store vertices that
//         // are being preprocessed. This is weird syntax in C++.
//         // Refer below link for details of this syntax
//         // https://www.geeksforgeeks.org/implement-min-heap-using-stl/
//         let pq = [];

//         // Create a vector for distances and initialize all
//         // distances as infinite (INF)
//         let dist = new Array(V).fill(INF);

//         // Insert source itself in priority queue and initialize
//         // its distance as 0.
//         pq.push([0, src]);
//         dist[src] = 0;

//         /* Looping till priority queue becomes empty (or all
//         distances are not finalized) */
//         while (pq.length > 0) {
//             // The first vertex in pair is the minimum distance
//             // vertex, extract it from priority queue.
//             // vertex label is stored in second of pair (it
//             // has to be done this way to keep the vertices
//             // sorted distance (distance must be first item
//             // in pair)
//             let u = pq[0][1];
//             pq.shift();

//             // 'i' is used to get all adjacent vertices of a
//             // vertex
//             for(let i = 0; i < this.adj[u].length; i++){

//                 // Get vertex label and weight of current
//                 // adjacent of u.
//                 let v = this.adj[u][i][0];
//                 let weight = this.adj[u][i][1];

//                 // If there is shorted path to v through u.
//                 if (dist[v] > dist[u] + weight) {
//                     // Updating distance of v
//                     dist[v] = dist[u] + weight;
//                     pq.push([dist[v], v]);
//                     pq.sort((a, b) =>{
//                         if(a[0] == b[0]) return a[1] - b[1];
//                         return a[0] - b[0];
//                     });
//                 }
//             }
//         }

//         // Print shortest distances stored in dist[]
//         console.log("Vertex Distance from Source");
//         for (let i = 0; i < V; ++i)
//             console.log(i, "        ", dist[i]);
//     }
// }

// // Driver's code
// // create the graph given in above figure
// let V = 9;
// let g = new Graph(V);

// // making above shown graph
// g.addEdge(0, 1, 4);
// g.addEdge(0, 7, 8);
// g.addEdge(1, 2, 8);
// g.addEdge(1, 7, 11);
// g.addEdge(2, 3, 7);
// g.addEdge(2, 8, 2);
// g.addEdge(2, 5, 4);
// g.addEdge(3, 4, 9);
// g.addEdge(3, 5, 14);
// g.addEdge(4, 5, 10);
// g.addEdge(5, 6, 2);
// g.addEdge(6, 7, 1);
// g.addEdge(6, 8, 6);
// g.addEdge(7, 8, 7);

// // Function call
// g.shortestPath(0);

// // The code is contributed by Nidhi goel.



// //+++++++++++====================-++++++++++++++++++++++++++++++++++=======================

class Graph {
    constructor(V) {
        this.adj = Array.from({ length: V }, () => [])
    }

    addEdge( u, v, w) {
        this.adj[u].push([v, w])
        this.adj[v].push([u, w])
    }
   
    shortestPath(src) {
        const pq =[]
        const dist = new Array(this.adj.length).fill(Infinity)
        // PQ be like ["distance","node"]
        pq.push([0,src])
        dist[src] = 0

        while(pq.length > 0){
            let node = pq[0][1]
            pq.shift()

            for(let i = 0 ; i < this.adj[node].length ; i++){
                let nieghbor = this.adj[node][i][0]
                let weight = this.adj[node][i][1]

                if(dist[nieghbor] > dist[node] + weight){
                    dist[nieghbor] = dist[node] + weight
                    pq.push([dist[nieghbor],nieghbor])
                    pq.sort((a,b)=>{
                        if(a[0] == b[0]) return a[1] - b[1]
                        return a[0] - b[0]
                    })
                }

            }

        }
        for (let i = 0; i < this.adj.length; ++i){
            console.log(i, "        ", dist[i]);
        }
    }
     
}
let g = new Graph(9);
g.addEdge(0, 1, 4);
g.addEdge(0, 7, 8);
g.addEdge(1, 2, 8);
g.addEdge(1, 7, 11);
g.addEdge(2, 3, 7);
g.addEdge(2, 8, 2);
g.addEdge(2, 5, 4);
g.addEdge(3, 4, 9);
g.addEdge(3, 5, 14);
g.addEdge(4, 5, 10);
g.addEdge(5, 6, 2);
g.addEdge(6, 7, 1);
g.addEdge(6, 8, 6);
g.addEdge(7, 8, 7);

// Function call
g.shortestPath(0);