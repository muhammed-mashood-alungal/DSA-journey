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
    length(){
      if(this.head == null){
        return 0
      }
      let temp = this.head
      let count=1
      while(temp.next != null){
        temp = temp.next
        count++
      }
      return count
    }

}
const newlist = new LinkedList()

newlist.arrayToLinkedList([1, 2, 3, 4, 5])
console.log(newlist.length())
