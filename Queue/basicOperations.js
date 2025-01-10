class Queue {
    constructor(){
        this.front = 0
        this.rear = 0
        this.items = []
    }
    isEmpty() {
        return this.front === this.rear;
    }

    enqueue(value){
        this.items.push(value)
        this.rear++
    }
    dequeue(){
         if(this.rear == this.front){
            return console.log("Queue is empty")
         }else{
            let removed = this.items[this.front]
            this.front++
            return removed
         }
    }
    size() {
        return this.rear - this.front;
    }
    peek() {
        if (this.front === this.rear) {
            console.log("Queue is empty");
            return null;
        }
        return this.items[this.front];
    }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // Output: 10
console.log(queue.peek());    // Output: 20
console.log(queue.size());    // Output: 2
console.log(queue.isEmpty()); // Output: false
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty()); // Output: true
queue.dequeue();  