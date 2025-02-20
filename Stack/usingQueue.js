
/// ====================? Implementing Stack using two queues  
class Stack {
    constructor(){
        this.q1 = []
        this.q2 = []
    }

    push(x){
        this.q2.push(x)
        while(this.q1.length > 0){
            this.q2.push(this.q1[0])
            this.q1.shift()
        }

        this.q = this.q1
        this.q1 = this.q2
        this.q2 = this.q
    }

    pop(){
        if(this.q1.length == 0){
            return 
        }
        return this.q1.shift()
    }
    top(){
        return this.q1[0] ? this.q1[0] : null
    }
    size(){
        return this.q1.length
    }
    isEmpty(){
        return this.q1.length == 0
    }
    front(){
        return this.q1[0] ? this.q1[0] : null
    }

}
let s = new Stack();
s.push(1);
s.push(2);
s.push(3);

console.log("current size: "+s.size());

console.log(s.top());
s.pop();
console.log(s.top());
s.pop();
console.log(s.top());

console.log("current size: "+s.size());

/// =========== implementing stack using one 
// class Stack{
//     constructor(){
//         this.q =[]
//     }
//     push(x){
//         this.q.push(x)
     
//         for(let i = 0 ; i < this.size()-1 ; i++){
//             this.q.push(this.q[0])
//             this.q.shift()
//         }
    
//     }

//     pop(){
//         if(this.q.length == 0){
//             return console.log("Stack Underflow")
//         }else{
//             this.q.shift()
//         }
//     }

//     top(){
//         return this.q[0] ? this.q[0] : null
//     }
//     isEmpty(){
//         return this.q.length == 0
//     }
//     size(){
//         return this.q.length
//     }
// }
// let st = new Stack();
// st.push(1);
// st.push(2);
// st.push(3);

// console.log("current size: "+st.size());

// console.log(st.top());
// st.pop();
// console.log(st.top());
// st.pop();
// console.log(st.top());

// console.log("current size: "+st.size());
// st.size();
