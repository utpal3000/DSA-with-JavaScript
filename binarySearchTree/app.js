// bst
console.log("BST - Binary Search Tree\n----------");

class BSTNode {
    constructor(key){
        this.key = key;
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root=null
    }

    insert(key){
        const newNode = new BSTNode(key)
        if (this.root=== null) {
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)

        }
    }

    insertNode(node,newNode){ // node - as root node
    if (newNode.key < node.key) {
        if(node.left === null){
            node.left=newNode
        }else{
            this.insertNode(node.left,newNode)
        }
    }else{
        if (node.right === null) {
            node.right = newNode
        }else{
            this.insertNode(node.right,newNode)
        }
    }
    }
}

// Testing
let newNode = new BSTNode(10)
console.log(newNode);
// newNode.insertNode(20)
let bstNode = new BinarySearchTree()
bstNode.insert(45)
console.log(bstNode);
bstNode.insert(50)
bstNode.insert(30)
bstNode.insert(60)
bstNode.insert
// bstNode.insertNode(45,newNode)
console.log(bstNode);
