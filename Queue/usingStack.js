// class Queue {
//     constructor() {
//         this.stack1 = [] // for enquue
//         this.stack2 = []  // for dequeue
//     }
//     enqueue(x) {
//         this.stack1.push(x)
//     }
//     dequeue() {
//         if(this.stack2.length == 0 ){
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.length ? this.stack2.pop() : null
//     }
//     front(){
//         if(this.stack2.length == 0 ){
//             while (this.stack1.length > 0) {
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.length ? this.stack2[this.stack2.length - 1] : null
//     }
// }
// const queue =new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())




/// Second Appraoch
class Queue {
    constructor() {
        this.stack1 = []; // Main stack (always holds elements in queue order)
        this.stack2 = []; // Temporary stack (used during push)
    }

    push(x) {
        // Move everything from stack1 to stack2
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }

        // Push new element into stack1
        this.stack1.push(x);

        // Move everything back from stack2 to stack1
        while (this.stack2.length > 0) {
            this.stack1.push(this.stack2.pop());
        }
    }

    pop() {
        return this.stack1.length ? this.stack1.pop() : -1; // O(1) pop
    }

    front() {
        return this.stack1.length ? this.stack1[this.stack1.length - 1] : -1; // O(1) peek
    }

    isEmpty() {
        return this.stack1.length === 0;
    }
}

// ✅ Test Cases
let q = new Queue();
q.push(1);
q.push(2);
q.push(3);
console.log(q.front());  // Output: 1
console.log(q.pop());    // Output: 1
console.log(q.front());  // Output: 2
console.log(q.pop());    // Output: 2
console.log(q.front());  // Output: 3
console.log(q.pop());    // Output: 3
console.log(q.isEmpty()); // Output: true
console.log(q.pop());    // Output: -1 (Queue is empty)
