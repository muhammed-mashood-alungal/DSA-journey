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

    clone(){
        let curr = this.head

        const map = new Map()

        while(curr){
            map.set(curr,new Node(curr.data))
            curr = curr.next
        }

        curr = this.head
        while(curr){
            const cloneNode = map.get(curr)
            cloneNode.next = map.get(curr.next) || null
            cloneNode.prev = map.get(curr.prev) || null

            curr = curr.next
        }
        return map.get(this.head)
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
list.arrayToList([1,2,3,4,5])
list.display(list.head)
list.display(list.clone())