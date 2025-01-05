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
    isPalindrome(){
        let left = this.head
        let right = this.tail

        while(left !== right && left.prev != right){
            if(left.data !== right.data){
                return false
            }
            left = left.next
            right = right.prev
        }
        return true
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
list.arrayToList([1,2,1])

list.display()
console.log(list.isPalindrome())