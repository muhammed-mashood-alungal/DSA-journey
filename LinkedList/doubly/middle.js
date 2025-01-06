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


    // Find Middle Node
    findMiddle(){
        let slow = this.head
        let fast = this.head
        

        while(fast.next != null && fast.next.next != null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
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
list.display()
console.log(list.findMiddle())