class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    
    insertAtEnd(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next !== null) {
            temp = temp.next;
        }
        temp.next = newNode;
    }

   
    findNthFromEnd(n) {
        let first = this.head 
        let second = this.head

        for(let i = 1 ; i <= n ; i++){
            if(first == null){
                return null
            }
            first = first.next
        }

        while(first != null){
            first = first.next
            second = second.next
        }
        return second.data 
    }

    // Display the list
    display() {
        let temp = this.head;
        const elements = [];
        while (temp !== null) {
            elements.push(temp.data);
            temp = temp.next;
        }
        console.log(elements.join(" -> "));
    }
}

const list = new LinkedList();
list.insertAtEnd(1);
list.insertAtEnd(2);
list.insertAtEnd(3);
list.insertAtEnd(4);
list.insertAtEnd(5);

console.log("Original List:");
list.display();

const n = 5 
const nthFromEnd = list.findNthFromEnd(n)
console.log(`The ${n}th node from the end is: ${nthFromEnd}`)
