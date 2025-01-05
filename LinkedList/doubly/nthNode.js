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
        this.tail = null
    }

    arrayToList(arr) {
        for (let x of arr) {
            const newNode = new Node(x)

            if (this.head == null) {
                this.head = newNode
                this.tail = newNode
            } else {
                this.tail.next = newNode
                newNode.prev = this.tail
                this.tail = newNode
            }
        }
        return this.head
    }

    find_last_nth_node(n) {
        let slow = this.head
        let fast = this.head
        for (let i = 1; i <= n; i++) {
            if(fast == null){
                return console.log("Invalid input")
            }
            fast = fast.next
        }

        while(fast != null){
            slow = slow.next
            fast = fast.next
        }
       

        return slow  
    }

    findAndDelete_last_nth(n){
        let slow = this.head
        let fast = this.head
        for (let i = 1; i <= n ; i++) {
            if(fast == null){
                return console.log("Invalid input")
            }
            fast = fast.next
        }

        while(fast != null){
            slow = slow.next
            fast = fast.next
        }
       

        if(slow.prev){
            slow.prev.next = slow.next
        }else{
            this.head = slow.next
        }
        if(slow.next){
            slow.next.prev = slow.prev
        }else{
            this.tail = slow.prev
        }
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
list.arrayToList([1, 2, 3, 4, 5])
list.findAndDelete_last_nth(5)
list.display()