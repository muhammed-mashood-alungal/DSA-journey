
function addEdge(adj,i,j){
    adj[i].push(j)
    adj[i].push(i)
}
function displayAdjList(adj) {
    for (let i = 0; i < adj.length; i++) {
        console.log(`${i}: `); 
        for (const j of adj[i]) {
             console.log(`${j} `); 
        }
        console.log(); 
    }
}

const adj = Array.from({length :5} ,()=>[])

addEdge(adj, 0, 1);
addEdge(adj, 0, 2);
addEdge(adj, 1, 2);
addEdge(adj, 2, 3);
console.log("Adjacency List Representation:");
displayAdjList(adj);