class Node {
    constructor(data,next = null){
        this.data = data
        this.next = next
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

    findMiddle(head){
        let slow = head 
        let fast = head

        while(fast.next != null && fast.next.next != null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    mergeSortedLists(list1,list2){
       let dummy = new Node(-1)
       let pointer = dummy

       while(list1 !=null && list2 !=null){
         if(list1.data < list2.data){
            pointer.next = list1
            list1.prev = pointer
            list1 = list1.next
         }else{
            pointer.next = list2
            list2.prev = pointer
            list2 = list2.next
         }
         pointer = pointer.next
       }

       if (list1 !== null) {
        pointer.next = list1;
        list1.prev = pointer; 
    }
    if (list2 !== null) {
        pointer.next = list2;
        list2.prev = pointer;
    }
       dummy.next.prev = null
       return dummy.next

    }

    sortLinkedList(head){
        if(head == null || head.next == null) return head

        let middle = this.findMiddle(head)
        let rightHalf = middle.next
        middle.next = null

        let left = this.sortLinkedList(head)
        let right = this.sortLinkedList(rightHalf)
        return this.mergeSortedLists(left,right)
    }

    display() {
        let curr = this.head
        while (curr !== null) {
            console.log(curr.data)
            curr = curr.next
        }

    }
    reverseDisplay(){
        let curr = this.tail
        while(curr != null){
            console.log(curr.data)
            curr = curr.prev
        }

    }
}
const list = new DLL()
list.arrayToList([1,2,3,1,5])

list.head = list.sortLinkedList(list.head)
list.display()
console.log("+++++++++++++")
list.reverseDisplay()