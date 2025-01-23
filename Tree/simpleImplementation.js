class TreeNode {
    constructor(data){
        this.data = data
        this.children = []
    }

    addChild(child){
        this.children.push(child)
    }


}
class Tree {
    constructor(rootValue){
      this.root =new TreeNode(rootValue) 
    }

    
     display(node = this.root, depth = 0) {
        if (!node) return;

        // Print the current node's value with indentation
        console.log("  ".repeat(depth) + node.data);

        // Recursively display children
        for (let child of node.children) {
            this.display(child, depth + 1);
        }
    }
    
   
}

const myTree = new Tree("Root");

// Add children to the root
const child1 = new TreeNode("Child 1");
const child2 = new TreeNode("Child 2");
myTree.root.addChild(child1);
myTree.root.addChild(child2);

// Add children to 'Child 1'
const child1_1 = new TreeNode("Child 1.1");
const child1_2 = new TreeNode("Child 1.2");
child1.addChild(child1_1);
child1.addChild(child1_2);

// Add children to 'Child 2'
const child2_1 = new TreeNode("Child 2.1");
child2.addChild(child2_1);

// Display the tree
console.log("Tree Structure:");
myTree.display();