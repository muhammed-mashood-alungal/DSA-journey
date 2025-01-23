class Graph {
    constructor(V) {
        this.adj = Array.from({ length: V }, () => [])
    }
    addEdge(u,v,w){
        this.adj[u].push([v,w])
        this.adj[v].push([u,w])
    }

    shortestPath(src) {
        const dist = new Array(this.adj.length).fill(Infinity)
        const queue = []
        queue.push([0,src]) /// q =[["distance",node].....]
        dist[src] = 0
        while(queue.length > 0){
            let node = queue[0][1]
            queue.shift()

            for(let i = 0 ; i < this.adj[node].length ; i++){
                let nieghbor = this.adj[node][i][0]
                let weight = this.adj[node][i][1]
                
                if(dist[nieghbor] > weight + dist[node]){
                    dist[nieghbor] = weight + dist[node]
                    queue.push([dist[nieghbor],nieghbor])

                    queue.sort((a,b)=>{
                        if(a[0] == b[0]) return a[1] - b[1]
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
// Sample graph to test the code
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