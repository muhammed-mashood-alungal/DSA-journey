// ========== Use merge sort to count the number of inversions in the array.

// function mergeAndCountInverse(arr, low = 0, high = arr.length - 1 ) {
//     let inversionCount = 0
//     if (low < high){
//         let mid = Math.floor((low + high) / 2)
//         inversionCount += mergeAndCountInverse(arr, low, mid)
//         inversionCount += mergeAndCountInverse(arr, mid + 1, high)
//         inversionCount += merge(arr, low, mid, high)
//     }
//     return inversionCount

    
// }

// function merge(arr, low, mid, high) {
//     let i = low
//     let j = mid + 1
//     let temp = []
//     let inversionCount = 0 

//     while (i <= mid && j <= high) {
//         if (arr[i] < arr[j]) {
//             temp.push(arr[i])
//             i++
//         } else {
//             inversionCount += (mid - i + 1) 
//             temp.push(arr[j])
//             j++
//         }
//     }
//     while (i <= mid) {
//         temp.push(arr[i])
//         i++
//     }
//     while (j <= high) {
//         temp.push(arr[j])
//         j++
//     }
//     for (let k = 0; k < temp.length; k++) {
//         arr[low + k] = temp[k];
//     }
//     return inversionCount
// }


// const arr =  [1, 20, 6, 4, 5]
// const count = mergeAndCountInverse(arr)
// console.log(count)




// ========  Apply merge sort to sort the linked list in ascending order.

class Node{
    constructor(data){
       this.data = data
       this.next = null
    }
}
function findMid(head){
    if(head == null) return null
    let slow = head
    let fast = head

    while(fast.next != null && fast.next.next != null){
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}
function merge(list1,list2){
    const dummy = new Node(-1)
    let current = dummy

    while(list1 != null && list2 != null){
        if(list1.data < list2.data){
            current.next = list1
            list1 = list1.next
        }else{
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }
    if(list1){
        current.next = list1
    }
    if(list2){
        current.next = list2
    }
    return dummy.next
}
function sortList(head){
    if(head == null || head.next == null) return head

    let mid = findMid(head)
    let rightHalf = mid.next
    mid.next = null

    let left = sortList(head)
    let right = sortList(rightHalf)

    return merge(left,right)
    
}
function display(head){
    let temp = head

    while(temp != null){
        console.log(temp.data)
        temp = temp.next
    }
}
const node1 = new Node(5)
node1.next = new Node(2)
node1.next.next = new Node(3)
node1.next.next.next = new Node(19)
node1.next.next.next.next = new Node(10)
console.log("Before Sorting+++++++++++++++++")
display(node1)
const newHead = sortList(node1)
console.log("After Sorting +++++++++++++")
display(newHead)