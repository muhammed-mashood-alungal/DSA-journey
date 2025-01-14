class Queue {
    constructor(){
        this.input = []
        this.output = []
    }
    push(x){
        this.input.push(x)
    }
    pop(){
        if(this.input.length == 0 && this.output.length == 0){
            return -1
        }

        if(this.output.length == 0){
            while(this.input.length > 0){
                this.output.push(this.input.shift())
            }
        }
        return this.output.shift()
    }
    top(){
        if(this.input.length == 0 && this.output.length == 0){
            return -1
        }

        if(this.output.length == 0){
            while(this.input.length > 0 ){
                this.output.push(this.input.shift())
            }
        }
        return this.output[0]
    }
    // pop(){
    //     if(this.input.length == 0 && this.output.length == 0){
    //         return -1
    //     }

    //     if(this.output.length == 0){
    //         while(this.input.length > 0){
    //             this.output.push(this.input.shift())
    //         }
    //     }
    //     return this.output.shift()
    // }
    // top(){
    //     if(this.input.length == 0 && this.output.length == 0){
    //         return null
    //     }

    //     if(this.output.length == 0){
    //         while(this.input.length > 0){
    //             this.output.push(this.input.shift())
    //         }
    //     }
 
    //     return this.output[0]
    // }
}
let q = new Queue;
q.push(1);
q.push(2);
q.push(3);
console.log(q.top())
console.log(q.pop())

console.log(q.top())
console.log(q.pop())

console.log(q.top())
console.log(q.pop())