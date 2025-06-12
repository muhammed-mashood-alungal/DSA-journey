class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    let node = this.root;
    if (node == null) {
      this.root = new Node(data);
      return;
    } else {
      function addToTree(node) {
        if (data < node.data) {
          if (node.left == null) {
            node.left = new Node(data);
            return;
          } else if (node.left != null) {
            return addToTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right != null) {
            return addToTree(node.right);
          }
        } else {
          return null;
        }
      }
      return addToTree(node);
    }
  }
  findMin() {
    let temp = this.root;
    while (temp.left != null) {
      temp = temp.left;
    }
    return temp;
  }
  findMax() {
    let temp = this.root;
    while (temp?.right != null) {
      temp = temp.right;
    }
    return temp;
  }

  find(data) {
    let current = this.root;
    while (current.data != data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    if (current == null) {
      return null;
    }
    return current;
  }
  isPresent(data) {
    let current = this.root;
    while (current != null) {
      if (current.data == data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data, node = this.root) {
    if (!node) return null;
    if (data < node.data) {
      node.left = this.remove(data, node.left);
    } else if (data > node.data) {
      node.right = this.remove(data, node.right);
    } else {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      const minSuccessor = this.findMin(node.right);
      node.data = minSuccessor.data;
      node.right = this.remove(minSuccessor.data, node.right);
    }
    return node;
  }
  displayInOrder(root) {
    if (root === null) return;
    this.displayInOrder(root.left);
    console.log(root.data);
    this.displayInOrder(root.right);
  }
}
const bst = new BST();
bst.add(12);
bst.add(23);
bst.add(45);
bst.add(1);
bst.add(4);
// bst.remove(1)
// bst.remove(12)
// bst.remove(45)
// console.log(bst.findMin().data)
// console.log(bst.findMax().data)
bst.displayInOrder(bst.root);
