class Node {
    constructor(data){
      this.data = data
      this.next = null
    }
}

class Queue {
    constructor(){
        this.front = null
        this.rear  = null
    }
    isEmpty(){
        if(this.front == null && this.rear == null){
            return true
        }else{
            return false
        }
    }

    enqueue(x){
        const newNode = new Node(x)

        if(this.rear == null){
            this.front = this.rear = newNode
            return
        }

        this.rear.next = newNode
        this.rear = newNode
        
    }
    dequeue(){
        if(this.isEmpty()){
            return console.log("Queue is Empty")
        }else{
            this.front = this.front.next
            if(this.front == null){
                this.rear = null
            }
        }
    }
    getFront(){
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return Number.MIN_VALUE;
        }
        return this.front.data;
    }

    getRear(){
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return Number.MIN_VALUE;
        }
        return this.rear.data;
    }
}

const q = new Queue();

// Enqueue elements into the queue
q.enqueue(10);
q.enqueue(20);

// Display the front and rear elements of the queue
console.log("Queue Front:", q.getFront());
console.log("Queue Rear:", q.getRear());

// Dequeue elements from the queue
q.dequeue();
q.dequeue();

// Enqueue more elements into the queue
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);

// Dequeue an element from the queue
q.dequeue();

// Display the front and rear elements of the queue
console.log("Queue Front:", q.getFront());
console.log("Queue Rear:", q.getRear());