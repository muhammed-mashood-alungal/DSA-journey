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

    removeFirstNode() {
        if (this.head == null) return null
        this.head = this.head.next
        return this.head
    }
    removeValueAt(target) {
        if (this.head.data == target) {
            this.head = this.head.next
            return
        }
        let temp = this.head
        while (temp.next != null && temp.next.data != target) {
            temp = temp.next
        }
        if (temp.next == null) {
            console.log('No such a value')
            return
        }

        temp.next = temp.next.next

    }

    removeLastNode() {
        if (this.head == null) return null
        let temp = this.head

        if (temp.next == null) {
            this.head = null
            return
        }

        while (temp.next.next != null) {
            temp = temp.next
        }
        temp.next = null
    }
}
const newlist = new LinkedList()

newlist.arrayToLinkedList([1, 2, 3, 4, 5])
// newlist.removeFirstNode()
// newlist.removeValueAt(2)
newlist.removeLastNode()
newlist.display()