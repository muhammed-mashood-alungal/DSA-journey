class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  arrayToList(arr) {
    for (let x of arr) {
      const newNode = new Node(x);

      if (this.head == null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
    return this.head;
  }

  hasCircle() {
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) {
        return true;
      }
    }
    return false;
  }
  removeCycle(loopNode) {
    let pointer1 = this.head;
    let pointer2 = loopNode;

    while (pointer1 !== pointer2) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next;
    }

    let prev = pointer2;
    while (prev.next !== pointer1) {
      prev = prev.next;
    }

    prev.next = null;
  }

  display() {
    let curr = this.head;
    while (curr !== null) {
      console.log(curr.data);
      curr = curr.next;
    }
  }
  findAndRemoveCircle() {
    let slow = this.head;
    let fast = this.head;

    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;

      if (slow == fast) {
        return this.removeCycle(slow);
      }
    }
    return false;
  }

  createCycle() {
    if (this.head === null) return;

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = this.head;
    this.head.prev = current;
  }
}
const list = new DLL();
list.arrayToList([1, 2, 3, 4, 5]);
list.createCycle();
console.log(list.hasCircle());
list.findAndRemoveCircle();
console.log(list.hasCircle());
//list.display()
