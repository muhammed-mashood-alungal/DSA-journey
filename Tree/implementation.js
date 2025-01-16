class Node {
    constructor(data , left = null , right = null ){
        this.data = data
        this.left = left
        this.right = right
    }
}
class BST{
    constructor(){
        this.root = null
    }

    add(data){
        let node = this.root
        if(node == null){
            this.root = new Node(data)
            return
        }else{
            function addToTree(node){
                if(data < node.data){
                    if(node.left == null){
                        node.left = new Node(data)
                        return
                    }else if(node.left !== null){
                        return addToTree(node.left)
                    }
                }else if (data > node.data){
                    if(node.right == null){
                        node.right = new Node(data)
                        return
                    }else{
                        return addToTree(node.right)
                    }
                }else{
                    return null
                }
                
            }
            return addToTree(node)
        }
    }
    findMin(){
        let temp = this.root
        while( temp.left != null){
            temp = temp.left
        }
        return temp?.data
    }
    findMax(){
        let temp = this.root
        while(temp?.right != null){
            temp = temp.right
        }
        return temp?.data
    }

    find(data){
        let current = this.root 
       while(current.data !=  data){
        if(data < current.data){
            current = current.left
        }else{
            current = current.right
        }
       }
       if(current == null){
        return null
       }
       return current
    }
    isPresent(data){
        let current = this.root
        while(current != null){
            if(current.data == data){
                return true
            }
            if(data < current.data ){
               current = current.left
            }else{
                current = current.right
            }
        }
        return false
    }
    remove(data){
        function removeNode(data,node){
          if(node == null){
            return null
          }
          if(node.data == data){
            if(node.left == null && node.right == null){
                return null
            }

            if(node.left == null){
                return node.right
            }
            if(node.right == null){
                return node.left
            }
            let temp = node.right

            while(temp.left){
                temp = temp.left
            }
            node.data = temp.data
            node.right = removeNode(temp.data , temp.right)
            return node
          }else if(data < node.data){
            node.left = removeNode(data , node.left)
            return node
          }else{
            node.right = removeNode(data,node.right)
            return node
          }
        }
        this.root = removeNode(data,this.root)
    }
}
const bst = new BST()
bst.add(12)
bst.add(23)
bst.add(45)
bst.add(1)
bst.add(4)
bst.remove(45)
console.log(bst.findMin())
console.log(bst.findMax())

