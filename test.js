class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(){
        this.root = null
    }

    insert(data){
        if(this.root == null){
            this.root = new Node(data)
            return
        }else{
            function addNode(node){
              if(data < node.data){
                if(node.left == null){
                    node.left = new Node(data)
                    return
                }else{
                    return addNode(node.left)
                }
              }else if (data > node.data){
                if(node.right == null){
                    node.right = new Node(data)
                    return
                }else{
                    return addNode(node.right)
                }
              }else{
                return null
              }
            }
            return addNode(this.root)
        }
    }

    findSecondSmallest(){
        let count = 0
        let ans = null
        function inOrder(node){
            if(node == null) return 
           inOrder(node.left)
           count++
           if(count == 2){
            ans = node.data
           }
           inOrder(node.right)
        }
        inOrder(this.root)
        return ans
    }
}
const bst = new BST()
bst.insert(10)
bst.insert(20)
bst.insert(15)
bst.insert(30)

console.log(bst.findSecondLargest())