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

    listToArray(){
        if(this.head == null) return []

        let curr = this.head
        let result = []
        while(curr != null){
            result.push(curr.data)
            curr = curr.next
        }
        return result
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
console.log(list.listToArray())
list.display()