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
    display() {
        let temp = this.head
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
    /// Reverse Print Using Recursion
    recursionReversePrint(node) {
        if (node == null) {
            return
        }

        this.recursionReversePrint(node.next)
        console.log(node.data)
    }

    // Reverse Stack Based Reverse Printing
    stackReversePrinting(node) {
        const stack = []
        
        let temp = node
        while (temp != null) {
            stack.push(temp.data)
            temp = temp.next
        }

        while (stack.length > 0) {
            console.log(stack.pop())
        }

    }


}
const newlist = new LinkedList()

newlist.arrayToLinkedList([1, 2, 3, 4, 5])
//newlist.display()
//newlist.recursionReversePrint(newlist.head)
newlist.stackReversePrinting(newlist.head)

