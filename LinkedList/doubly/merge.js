class Node {
    constructor(data,next =null){
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

    merge(list1,list2){
        const dummy = new Node(0)
        let curr = dummy
        while(list1 != null && list2 != null){
            if(list1.data < list2.data){
                curr.next = list1
                list1.prev = curr
                list1 = list1.next
            }else{
                curr.next = list2
                list2.prev = curr
                list2 = list2.next
            }
            curr = curr.next
        }
        return dummy.next
    }
    display(head) {
        let curr = head
        while (curr !== null) {
            console.log(curr.data)
            curr = curr.next
        }
    }
}
const list = new DLL()
let a = new Node(1);
a.next = new Node(3);
a.next.prev = a;
a.next.next = new Node(5);
a.next.next.prev = a.next;

let b = new Node(2);
b.next = new Node(4);
b.next.prev = b;
b.next.next = new Node(6);
b.next.next.prev = b.next;
//list.display(list.head)
list.display(list.merge(a,b))