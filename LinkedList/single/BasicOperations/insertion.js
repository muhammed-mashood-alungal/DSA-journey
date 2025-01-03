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
    // Add One Value in Tail
    addinTail(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
    }


    addinHead(value) {
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.tail = newNode
    }


    ///For adding a value at a specific Position
    addInPos(value, pos) {
        if (pos < 1) {
            console.log("Invalid Position")
            return
        }
        if (pos == 1) {
            const newNode = new Node(value)
            newNode.next = this.head
            this.head = newNode
            return
        }

        let prev = this.head
        let count = 1
        while (prev != null && count < pos - 1) {
            prev = prev.next
            count++
        }

        if (prev == null) {
            console.log("Invalid Position")
            return
        }

        const newNode = new Node(value)
        newNode.next = prev.next
        prev.next = newNode
    }

    addBefore(value, before) {
        if (this.head == null) {
            return
        }
        const newNode = new Node(value)
        if (this.head.data == before) {
            newNode.next = this.head
            this.head = newNode
            return
        }

        let temp = this.head
        while (temp.next != null &&  temp.next.data != before) {
           temp = temp.next
        }
        if(temp.next == null){
            console.log("Invalid Value")
            return 
        }

        newNode.next= temp.next
        temp.next = newNode
    }
    /// Exmaple for Both Traversal and Printing Linked List
    display() {
        let temp = this.head
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}
const newlist = new LinkedList()
newlist.addinHead(10)
newlist.addinTail(3)
newlist.addinTail(23)
newlist.addinTail(43)
newlist.addInPos(100, 2)
newlist.addBefore(500,43 )


newlist.display()