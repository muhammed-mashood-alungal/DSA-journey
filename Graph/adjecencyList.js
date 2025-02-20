
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(v1, v2) {
        if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
            if (!this.adjacencyList[v1].includes(v2)) {
                this.adjacencyList[v1].push(v2);
            }
            if (!this.adjacencyList[v2].includes(v1)) {
                this.adjacencyList[v2].push(v1);
            }
        }
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach((adjecentVertex)=>{
           this.removeEdge(vertex,adjecentVertex)
        })
        delete this.adjacencyList[vertex];
    }
    display(){
        for(let key in this.adjacencyList){
            
            const temp = []
            for(let i = 0 ; i < this.adjacencyList[key].length ; i++){
                temp.push(this.adjacencyList[key][i])
            }
            console.log(key + " : " + temp.join(", "));
        }
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")

graph.addEdge("A","B")
graph.addEdge("B","C")
graph.addEdge("C","D")
graph.display()
