class Node {
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

class DLL {
    constructor() {
        this.head = null
    }

    insertAtPos(value, pos) {
        const newNode = new Node(value)
        
        if (pos == 1) {
            if(this.head ==null){
                this.head = newNode
                return
            }
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
            return
        }

        let count = 1
        let prev = this.head

        while (prev != null && count < pos - 1) {
            count++
            prev = prev.next
        }

        if(prev == null){
            return console.log("Invalid Position")
        }

        newNode.next = prev.next
        newNode.prev = prev
        prev.next = newNode
        if(newNode.next){
            newNode.next.prev = newNode
        }
    }
    display(){
        let curr = this.head 

        while(curr != null){
            console.log("current data : "+curr.data)
            console.log("prevous :"+curr.prev?.data)
            curr = curr.next
        }
    }
}
const list = new DLL()
list.insertAtPos(10,1)
list.insertAtPos(20,2)
list.insertAtPos(30,3)
list.insertAtPos(40,4)
list.display()

