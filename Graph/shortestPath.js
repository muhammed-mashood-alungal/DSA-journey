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


// //+++++++++++====================++++++++++++++++++++++++++++++++++=======================

class Graph {
    constructor(V) {
        this.adj = Array.from({ length: V }, () => []) 
    }

    addEdge(u, v, w) {
        this.adj[u].push([v, w])
        this.adj[v].push([u, w])
    }

    shortestPath(src) {
        const pq = []
        const dist = new Array(this.adj.length).fill(Infinity)
        // PQ be like ["distance","node"]
        pq.push([0, src])
        dist[src] = 0

        while (pq.length > 0) {
            let node = pq[0][1]
            pq.shift()

            for (let i = 0; i < this.adj[node].length; i++) {
                let nieghbor = this.adj[node][i][0]
                let weight = this.adj[node][i][1]

                if (dist[nieghbor] > dist[node] + weight) {
                    dist[nieghbor] = dist[node] + weight
                    pq.push([dist[nieghbor], nieghbor])
                    pq.sort((a, b) => {
                        if (a[0] == b[0]) return a[1] - b[1]
                        return a[0] - b[0]
                    })
                }

            }

        }
        for (let i = 0; i < this.adj.length; ++i) {
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
g.shortestPath(0);





////////////// FINAL CODE
class MinHeap { 
  constructor() {
    this.heap = [];
  }

  insert(node, priority) {
    this.heap.push({ node, priority });
    this._bubbleUp();
  }

  extractMin() {
    if (this.heap.length === 1) return this.heap.pop();
    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return min;
  }

  _bubbleUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[parent].priority <= this.heap[index].priority) break;
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
    }
  }

  _bubbleDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left].priority < this.heap[smallest].priority)
        smallest = left;
      if (right < length && this.heap[right].priority < this.heap[smallest].priority)
        smallest = right;

      if (smallest === index) break;
      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}


function dijkstra(src , graph){
    const distances= {}
    const visited ={}
    const minHeap =new MinHeap()
    
    for(let node in graph){
        distances[node] = Infinity
    }
    distances[src] = 0
    minHeap.insert(src , 0)
    while(!minHeap.isEmpty()){
        const {node,priority}  = minHeap.extractMin()
        if(visited[node]) continue
        visited[node] = true
        
        for(let [neighbour , weight] of graph[node]){
            let newDist = priority + weight
            if(newDist < distances[neighbour]){
                distances[neighbour] = newDist
                 minHeap.insert(neighbour, newDist);
            }
        }
    }
    return distances
}

const graph = {
    'A': [['B',3],['C',2]],
    'B':[['E',1]],
    'C': [['E',3]],
    'D': [['C',2]],
    'E':[]
}

console.log(dijkstra('A',graph))