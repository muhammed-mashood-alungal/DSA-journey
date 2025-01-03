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
    

}
const newlist = new LinkedList()

newlist.arrayToLinkedList([1, 2, 3, 4, 5])
newlist.display()

