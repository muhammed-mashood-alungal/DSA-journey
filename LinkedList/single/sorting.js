class Node {
    constructor(data,next = null){
        this.data = data
        this.next = next
    }
}

function findMiddle(head){
    let slow = head
    let fast = head

    while(fast.next != null && fast.next.next != null){
        slow  = slow.next
        fast = fast.next.next
    }
    return slow
}

function mergeSortedLists(list1 , list2){
    
    let dummy =new Node(0)
    let pointer = dummy
    while(list1 != null && list2 != null){
        if(list1.data < list2.data){
            pointer.next = list1
            list1 = list1.next
        }else{
            pointer.next = list2
            list2 = list2.next
        }
        pointer = pointer.next
    }
    if(list1){
        pointer.next = list1
    }else{
        pointer.next = list2
    }
    return dummy.next
}

function sortLinkedList(head){
   if(head == null || head.next == null){
    return head
   }

   let middle = findMiddle(head)
   let rightHalf = middle.next
   middle.next = null

   let left = sortLinkedList(head)
   let right = sortLinkedList(rightHalf)


   return mergeSortedLists(left,right)
}

function mergeUnsortedList(list1,list2){

    const sortedlist1 = sortLinkedList(list1)
    const sortedlist2 = sortLinkedList(list2)

    return mergeSortedLists(sortedlist1,sortedlist2)
}
function printList(head) {
    let result = [];
    while (head !== null) {
        result.push(head.data);
        head = head.next;
    }
    console.log(result.join(" -> ") + " -> null");
}


let list1 = new Node(4, new Node(2, new Node(1, new Node(3))));
let list2 = new Node(6, new Node(5, new Node(8, new Node(7))));

let sortedMergedList = mergeUnsortedList(list1, list2)
printList(sortedMergedList)