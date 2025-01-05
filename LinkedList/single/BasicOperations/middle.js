class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class List {
    constructor() {
        this.head = null
    }
    insertAtEnd(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
            return
        }
        let last = this.head
        while (last.next != null) {
            last = last.next
        }
        last.next = newNode
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
    
    findMiddle(){
        if(this.head == null) return null
        let slow = this.head
        let fast = this.head

        while(fast.next!= null && fast.next.next != null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.data
    }
    findAndDeleteMiddle(){
        if(this.head == null) return null

        let slow = this.head
        let fast = this.head
        let prev = null

        while(fast != null && fast.next !=null){
            prev = slow
            slow  = slow.next
            fast = fast.next.next
        }
         if(prev == null){
            this.head = this.head.next
         }else{
            
             prev.next = slow.next
         }


    }


}
const list = new List()
list.arrayToLinkedList([1, 2, 3 , 4])
console.log(list.findMiddle())
//list.findAndDeleteMiddle()
//list.display()
