class Node {
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}
class DLL{
    constructor(){
        this.head = null
        this.tail = null
    }

    arrayToList(arr){
      for(let x of arr){
        const newNode = new Node(x)

        if(this.head == null){
            this.head = newNode
            this.tail = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
      }
      return this.head
    }
     reverse() {
        let prevNode = null
        let currNode = this.head

        while(currNode != null){
            prevNode = currNode.prev
            currNode.prev = currNode.next
            currNode.next = prevNode

            currNode = currNode.prev
        }
        this.head = prevNode.prev
    }
    display() {
        let curr = this.head
        while (curr !== null) {
            console.log(curr.data)
            curr = curr.next
        }
    }
}
const list = new DLL()
list.arrayToList([1,2,3,4,5])
list.reverse()
list.display()