class Queue{
    constructor(){
        this.input = []
        this.output = []
    }
    
    push(val){
        this.input.push(val)
    }

    pop(){
        if(this.output.length != 0 ){
            return this.output.pop()
        }else{
            while(this.input.length > 0 ){
                this.output.push(this.input.pop())
            }
            return this.output.pop()
        }
    }
    
    top(){
        if(this.output.length == 0){
            while(this.input.length > 0 ){
                this.output.push(this.input.pop())
            }
        }
        return this.output[this.output.length-1]
    }
}


const q = new Queue()
q.push(10)
q.push(20)
q.push(1)
q.push(310)
console.log(q.top())
console.log(q.pop())
console.log(q.top())





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
let queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.front());  // Output: 1
console.log(queue.pop());    // Output: 1
console.log(queue.front());  // Output: 2
console.log(queue.pop());    // Output: 2
console.log(queue.front());  // Output: 3
console.log(queue.pop());    // Output: 3
console.log(queue.isEmpty()); // Output: true
console.log(queue.pop());    // Output: -1 (Queue is empty)
