// class Node {
//     constructor(data) {
//         this.data = data
//         this.next = null
//     }
// }
// class List {
//     constructor() {
//         this.head = null
//     }
//     insertAtEnd(value) {
//         const newNode = new Node(value)
//         if (this.head == null) {
//             this.head = newNode
//             return
//         }
//         let last = this.head
//         while (last.next != null) {
//             last = last.next
//         }
//         last.next = newNode
//     }

//     arrayToLinkedList(arr) {
//         for (let x of arr) {
//             this.insertAtEnd(x)
//         }
//     }
//     display() {
//         let temp = this.head
//         while (temp != null) {
//             console.log(temp.data)
//             temp = temp.next
//         }
//     }
// }
// const list = new List()
// list.arrayToLinkedList([1, 2, 3, 4, 5])
// list.display()

