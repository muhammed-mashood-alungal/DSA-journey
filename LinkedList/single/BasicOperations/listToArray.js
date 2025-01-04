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

    listToArray(){
       let result =[]
       let temp = this.head
       while(temp != null){
        result.push(temp.data)
        temp = temp.next
       }
       return result
    }
}
const list = new List()
list.arrayToLinkedList([1, 2, 3, 4, 5])
console.log(list.listToArray())