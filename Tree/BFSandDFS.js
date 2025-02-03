class TreeNode {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

/// 1.1 DFS In-Order traversal
function dfsInorder(node) {
    if (node == null) return
    dfsInorder(node.left)
    console.log(node.data)
    dfsInorder(node.right)
}

//1.2 DFS Pre-Order traversal
function dfsPreorder(node) {
    if (node == null) return
    console.log(node.data)
    dfsPreorder(node.left)
    dfsPreorder(node.right)
}

// 1.3 DFS Post-Order
function dfsPostorder(node) {
    if (node == null) return

    dfsPostorder(node.left)
    dfsPostorder(node.right)
    console.log(node.data)
}

// 2.  BFS Implementation

function bfsTraversal(root) {
    if (root == null) return

    const queue = [root]

    while (queue.length > 0){
        let node = queue.shift()
        console.log(node.data)
        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)
    }

}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("DFS Preorder:");
dfsPreorder(root); // Output: 1 2 4 5 3 6 7

console.log("\nDFS Inorder:");
dfsInorder(root); // Output: 4 2 5 1 6 3 7

console.log("\nDFS Postorder:");
dfsPostorder(root); // Output: 4 5 2 6 7 3 1

console.log("\nBFS:");
bfsTraversal(root); // 