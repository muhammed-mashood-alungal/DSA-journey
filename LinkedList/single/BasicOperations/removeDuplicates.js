class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class SLL {
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
    //Write a program to remove duplicates in a sorted singly linked list
    removeDuplicates() {
        let curr = this.head

        while (curr != null && curr.next != null) {
            if(curr.data == curr.next.data){
                curr.next = curr.next.next
            }else{
                curr = curr.next
            }
        }
    }
    display() {
        let temp = this.head
        while (temp != null) {
            console.log(temp.data)
            temp = temp.next
        }
    }
}


const list = new SLL()
list.arrayToLinkedList([1,1,1, 2,2, 3, 4, 5])
list.display()
list.removeDuplicates()
console.log("==============")
list.display()