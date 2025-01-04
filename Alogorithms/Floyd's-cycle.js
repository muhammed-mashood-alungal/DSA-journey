class Node{
    constructor(data){
        this.next = null
        this.data = data
    }
}

class SLL{
    constructor(){
        this.head = null
        this.tail = null
    }
    hasCycle(){
       let slow = this.head
       let fast = this.head
    
       while(fast != null && fast.next !== null){
        slow = slow.next
        fast = fast.next.next
    
        if(slow == fast){
            return true
        }
       }
       return false
    }  
  }

  const list = new SLL()
  const node1 = new Node(1)
  node1.next = new Node(2)
  node1.next.next = new Node(3)
  node1.next.next.next = node1
  list.head = node1
 console.log(list.hasCycle())
