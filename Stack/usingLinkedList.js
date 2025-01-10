class Node {
    constructor(new_data) {
        this.data = new_data;
        this.next = null;
    }
}

class Stack {
    constructor (){
        this.head = null
    }

    isEmpty(){
        return this.head === null
    }

    push(value){
        const newNode = new Node(value)

        newNode.next = this.head
        this.head = newNode
        return this.head
    }
    pop(){
        if(this.isEmpty()){
           console.log("Stack Underflow") 
           return null
        }else{
            let temp = this.head
            this.head = this.head.next

            temp = null
        }
    }
    print(){
        let temp = this.head
        while(temp != null){
            
            console.log(temp.data)
            temp = temp.next
        }
        
    }
}

const st = new Stack();

// Push elements onto the stack
st.push(11);
st.push(22);
st.push(33);
st.push(44);

st.print()

// removing two elemements from the top
console.log("Removing two elements...");
st.pop();
st.pop();
st.print()