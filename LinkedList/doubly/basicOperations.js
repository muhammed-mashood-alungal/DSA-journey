class Node {
    constructor(data) {
        this.data = data
        this.prev = null
        this.next = null
    }
}

class DDL {
    constructor() {
        this.head = null
        this.tail = null
    }

    addAtHead(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
            return
        }
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode

    }

    addAtEnd(value) {
        const newNode = new Node(value)
        if (this.head == null) {
            this.head = newNode
            this.tail = newNode
            return
        }
        newNode.prev = this.tail
        this.tail.next = newNode
        this.tail = newNode

    }
    //Insertion at a specific position in Doubly Linked List
    insertAt(value, pos) {
        const newNode = new Node(value)

        if (pos == 1) {
            newNode.next = this.head
            if (this.head != null) {
                this.head.prev = newNode
            }
            this.head = newNode
            if (this.tail == null) {
                this.tail = newNode
            }

            return
        }

        let count = 1
        let curr = this.head
        while (count < pos - 1 && curr != null) {
            count++
            curr = curr.next
        }
        if (curr == null) {
            console.log("Invalid position")
            return
        }

        newNode.prev = curr
        newNode.next = curr.next
        curr.next = newNode
        if (newNode.next != null) {
            newNode.next.prev = newNode
        } else {
            this.tail = newNode
        }


    }

    /// Deletion of a node at the beginning of Doubly Linked List
    deleteAtStart() {
        if (this.head == null) {
            return
        }
        if (this.head.next) {
            this.head.next.prev = null
        }
        this.head = this.head.next
    }

    /// Deletion of a node at the end of Doubly Linked List
    deleteAtEnd() {
        if (this.tail == null) {
            console.log("NOthing to remove")
            return
        }
        if (this.tail.prev == null) {
            this.head = null
            this.tail = null
            return
        }
        this.tail = this.tail.prev
        this.tail.next = null
    }

    /// Deletion of a node at a specific position in Doubly Linked List
    deleteAt(pos) {

        if (pos == 1) {
            if (this.head.next) {
                this.head.next.prev = null
            }
            this.head = this.head.next
            return
        }

        let curr = this.head
        let count = 1
        while (count < pos && curr != null) {
            count++
            curr = curr.next
        }

        if (curr == null) {
            return console.log("invalid Position")
        }
        if(curr.prev){
            curr.prev.next = curr.next
        }
        if(curr.next){
            curr.next.prev = curr.prev
        }
        if (curr.next == null) {
            this.tail = curr.prev;
        }


    }

    /// For check whether is the value exists or not
    searchNode(target) {
        let curr = this.head
        while (curr != null && curr.data != target) {
            curr = curr.next
        }
        if (curr == null) {
            return false
        } else {
            return true
        }

    }


    ///To get the length of list
    length() {
        let curr = this.head
        let count = 0
        while (curr != null) {
            curr = curr.next
            count++
        }
        return count
    }

    display() {
        let curr = this.head

        while (curr !== null) {
            console.log(curr.data)
            curr = curr.next
        }

    }


}

const list = new DDL()
list.addAtEnd(5)
list.addAtEnd(4)
list.addAtEnd(2)
list.addAtEnd(8)
list.addAtHead(100)
list.insertAt(500, 1)
console.log(list.searchNode(5))
list.deleteAtStart()
list.deleteAtEnd()
list.display()
list.deleteAt(3)
console.log("Length of the list is : " + list.length())
list.display()