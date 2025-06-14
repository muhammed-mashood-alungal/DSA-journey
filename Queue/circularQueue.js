// class CircularQueue {
//     constructor(c){
//         this.q = new Array(c).fill(0)
//         this.capacity = c
//         this.size = 0
//         this.front = 0
//         this.rear = 0
//     }


//     enqueue(x){
//         if(this.size == this.capacity) return null
        
//         let rear = (this.front + this.size) % this.capacity
//         this.q[rear] = x
//         this.size++
//     }
//     dequeue(){
//         if(this.size == 0) return null

//         let x = this.q[this.front]
//         this.front = (this.front +1) % this.capacity
//         this.size--
//         return x
//     }
//     getFront(){
//         if(this.size == 0) return null
//         return this.q[this.front]
//     }
//     getRear(){
//         if(this.size === 0) return null
//         let rear =(this.front +this.size -1 ) % this.capacity
//        return this.q[rear]
//     }
// }

// const q = new CircularQueue(4);   // Create a queue with a capacity of 4
// q.enqueue(10);              // Add 10 to the queue
// console.log(q.getFront(), q.getRear()); // Front: 10, Rear: 10
// q.enqueue(20);              // Add 20 to the queue
// console.log(q.getFront(), q.getRear()); // Front: 10, Rear: 20
// q.enqueue(30);              // Add 30 to the queue
// console.log(q.getFront(), q.getRear()); // Front: 10, Rear: 30
// q.enqueue(40);              // Add 40 to the queue
// console.log(q.getFront(), q.getRear()); // Front: 10, Rear: 40
// q.dequeue();                // Remove the front element (10)
// console.log(q.getFront(), q.getRear()); // Front: 20, Rear: 40
// q.dequeue();                // Remove the front element (20)
// console.log(q.getFront(), q.getRear()); // Front: 30, Rear: 40
// q.enqueue(50);              // Add 50 to the queue
// console.log(q.getFront(), q.getRear()); // Front: 30, Rear: 50

class Circular {
    constructor(c){
        this.capacity = c
        this.q = new Array(this.capacity)
        this.size = 0
        this.front = 0
        this.rear = 0
    }
    enq(val){
        if(this.size == this.capacity){
            return
        }
        
        this.rear = (this.front+this.size) % this.capacity
        this.q[this.rear] = val
        this.size++
    }
    deq(){
        if(this.size == 0){
            return 
        }
        let x = this.q[this.front]
        this.front = (this.front +1) % this.capacity
        this.size--
        return x
    }
    getFront(){
        return this.q[this.front]
    }
    getRear(){
      const lastIdx = (this.front + this.size -1) % this.capacity
      return this.q[lastIdx]
    }
}