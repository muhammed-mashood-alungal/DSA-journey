class Node {
    constructor(data, left = null, right = null) {
        this.data = data
        this.left = left
        this.right = right
    }
}
class BST {
    constructor() {
        this.root = null
    }

    add(data) {
        let node = this.root
        if (node == null) {
            this.root = new Node(data)
            return
        } else {
            function addToTree(node) {
                if (data < node.data) {
                    if (node.left == null) {
                        node.left = new Node(data)
                        return
                    } else if (node.left !== null) {
                        return addToTree(node.left)
                    }
                } else if (data > node.data) {
                    if (node.right == null) {
                        node.right = new Node(data)
                        return
                    } else {
                        return addToTree(node.right)
                    }
                } else {
                    return null
                }

            }
            return addToTree(node)
        }
    }
    findClosestValue(node, target) {
        let res = node.data

        while (node != null) {
            if (Math.abs(target - node.data) < Math.abs(target - res)) {
                res = node.data
            }

            if (target < node.data) {
                node = node.left
            } else {
                node = node.right
            }
        }
        return res
    }

    /// Using Recursive Method
    findClosestValueRecursion(node, target) {
      return  this.findClosestValueRecursionHelper(node, target, node.data)
    }
    findClosestValueRecursionHelper(node, target, closest) {
       if(node == null){
        return closest
       }
       if(Math.abs(target - node.data) < Math.abs(target - closest)){
        closest = node.data
       }
       if(target <node.data ){
        return this.findClosestValueRecursionHelper(node.left , target , closest)
       }else if(node.data > target){
        return this.findClosestValueRecursionHelper(node.right , target , closest)
       }else{
        return closest
       }
    }   


}
const bst = new BST()
bst.add(12)
bst.add(23)
bst.add(45)
bst.add(1)
bst.add(4)

console.log(bst.findClosestValue(bst.root, 0))
console.log(bst.findClosestValueRecursion(bst.root, 0))