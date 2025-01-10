// ====== 1. Sort a array of strings

// function sortStrings(strs){
//     for(let  i = 1 ; i < strs.length ; i++){
//         j = i -1
//         key = strs[i]

//         while(j >= 0 && strs[j] > key){
//             strs[j+1] = strs[j]
//             j--
//         }
//         strs[j+1] = key
//     }
//     return strs
// }

// console.log(sortStrings(["banana", "apple", "cherry", "date"]))

// ======= 2. Sorting a Linked List

// class Node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }
// const head = new Node(4)
// head.next = new Node(3)
// head.next.next = new Node(2)
// head.next.next.next = new Node(10)
// head.next.next.next.next = new Node(12)
// head.next.next.next.next.next = new Node(1)
// head.next.next.next.next.next.next = new Node(5)

// function displayList(head){
//       let temp = head 

//       while(temp){
//         console.log(temp.data)
//         temp = temp.next
//       }
// }
// function insertInSorted(sortedHead ,newNode){
//    if(sortedHead == null || sortedHead.data >= newNode.data){
//       newNode.next = sortedHead
//       return newNode
//    }else{

//     let temp = sortedHead

//     while(temp.next != null && temp.next.data < newNode.data){
//         temp = temp.next
//     }
//     newNode.next = temp.next
//     temp.next = newNode
//     return sortedHead
    
//    }
    
// }
// function sortList(head){
//     let current = head
//     let sortedHead = null
//     while(current != null){
//          let  next = current.next

//           sortedHead = insertInSorted(sortedHead , current)

//           current = next
//     }
//     return sortedHead
// }
// console.log("------ Before Sorting")
// displayList(head)
// const sortedHead = sortList(head)
// console.log("+++++++ After Sorting")
// displayList(sortedHead)

