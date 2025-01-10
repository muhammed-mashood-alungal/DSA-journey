t = -1
const MAX = 10
const stack= Array.of(MAX).fill(0)
function push(x){
    if(t >= MAX ){
        console.log("Stack Overflow")
        return false
    }else{
        t++
        stack[t] = x
        return true
    }
}

function pop(){
    if(t < 0){
        console.log("Stack Underflow")
        return 0
    }else{
        let x = stack[t]
        t--
        return x
    }
}

function peek(){
    if(t < 0){
        console.log("no elements in stack")
        return null
    }else{
        return stack[t]
    }
}
function print() { 
    for (i = t; i > -1; i--) { 
        console.log(" " + stack[i]); 
    } 
} 

    push(10); 
    push(20); 
    push(30); 
    console.log(pop() + " Popped from stack"); 
    console.log("Top element is :" + peek()); 
    console.log("Elements present in stack : "); 
    print();