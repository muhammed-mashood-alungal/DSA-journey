

function print() { 
    for (i = t; i > -1; i--) { 
        console.log("| " + stack[i] + " |"); 
    } 
} 

const MAX = 10
let t = -1
const stack = Array.of(MAX).fill(0)

function push(x) {
    if (t >= MAX - 1) {
        return console.log("Stack Overflow")
    } else {
        t++
        stack[t] = x
        return true
    }
}
function pop() {
    if (t < 0) {
        return console.log("Stack underflow")
    } else {
        let x = stack[t]
        t--
        return x
    }
}
function isEmpty() {
    return t < 0
}

function peek() {
    return t < 0 ? null : stack[t]
}


push(10);
push(20);
push(30);
console.log(pop() + " Popped from stack");
console.log("Top element is :" + peek());
console.log("Elements present in stack : ");
print();