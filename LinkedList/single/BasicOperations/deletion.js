class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    
    insertAtEnd(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
            return
        }
        let last = this.head
        while (last.next != null) {
            last = last.next
        }
        last.next = newNode
        this.tail = newNode
    }

    arrayToLinkedList(arr) {
        for (let x of arr) {
            this.insertAtEnd(x)
        }
    }

    display() {
        let temp = this.head
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }

    removeFirstNode(){
        if(this.head == null) return 
        this.head = this.head.next
    }

    removeValueAt(value){   
        if(this.head == null){
            return 
        }
        if(this.head.data == value){
           this.head = this.head.next
            return
        }
        let temp = this.head
        while (temp.next != null && temp.next.data != value){
            temp = temp.next
        }
        if(temp.next == null){
            console.log("Invalid Value")
            return 
        }

         temp.next = temp.next.next
         if(temp.next == null){
            this.tail = temp
         }
    }

    removeLastNode(){
        if(this.head == null){
            return 
        }
        let temp = this.head
        
        while(temp.next && temp.next.next !== null){
            temp = temp.next
        } 
        if(temp.next == null){
            this.head = null
            this.tail = null
            return
        }
        temp.next = null
        this.tail = temp
        
    }
}
const newlist = new LinkedList()

newlist.arrayToLinkedList([1,2,3,4,5])
// newlist.removeFirstNode()
//newlist.removeValueAt(1)
//newlist.removeLastNode()
newlist.display()
console.log(newlist.tail)