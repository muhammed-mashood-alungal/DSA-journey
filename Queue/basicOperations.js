// class Queue {
//     constructor(){
//         this.front = 0
//         this.rear = 0
//         this.items = []
//     }
//     isEmpty() {
//         return this.front === this.rear;
//     }

//     enqueue(value){
//         this.items.push(value)
//         this.rear++
//     }
//     dequeue(){
//          if(this.rear == this.front){
//             return console.log("Queue is empty")
//          }else{
//             let removed = this.items[this.front]
//             this.front++
//             return removed
//          }
//     }
//     size() {
//         return this.rear - this.front;
//     }
//     peek() {
//         if (this.front === this.rear) {
//             console.log("Queue is empty");
//             return null;
//         }
//         return this.items[this.front];
//     }
// }

class Queue {
    constructor(){
        this.capacity = 10
        this.queue = Array(this.capacity).fill(0)
        this.size = 0
    }

    enqueue(x){
       if(this.capacity==this.size){
        return
       }

       this.queue[this.size] = x
       this.size++
    }
    dequeue(){
        if(this.size == 0){
            return 
        }
        let x = this.queue[0]
        for(let i = 1 ; i < this.size ; i++){
            this.queue[i-1] = this.queue[i]
        }
        this.size--
        return x
    }
    peek(){
        return this.queue[0] ? this.queue[0] : null
    }
    isEmpty(){
        return this.size == 0
    }
    display(){
        for(let i = 0 ; i < this.size ; i++){
            console.log(i+1 +" " + this.queue[i])
        }
    }
}
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.display();
console.log(queue.dequeue()); // Output: 10
console.log(queue.peek());    // Output: 20
//console.log(queue.size());    // Output: 2
console.log(queue.isEmpty()); // Output: false
queue.dequeue();
queue.dequeue();
console.log(queue.isEmpty()); // Output: true
queue.dequeue();  
