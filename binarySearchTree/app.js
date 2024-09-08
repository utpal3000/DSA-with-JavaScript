// bst
console.log("BST - Binary Search Tree\n----------");

class BSTNode {
    constructor(key) {
        this.key = key;
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(key) {
        const newNode = new BSTNode(key)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)

        }
    }

    insertNode(node, newNode) { // node - as root node
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    delete(key) {
        this.root = this.deleteNode(this.root, key)

    }

    deleteNode(node, key) {
        if (node == null) {
            return null
        }
        if (key < node.key) {
            node.left = this.deleteNode(node.left, key)
        } else if (key > node.key) {
            node.right = this.deleteNode(node.right, key)
        } else {
            if (node.left === null && node.right === null) {
                return null
            } else if (node.left === null) {
                return node.right
            } else if (node.right === null) {
                return node.left
            } else {
                let tempNode = this.findMinNode(node.right) // right's smallest value
                node.key = tempNode.key
                node.right = this.deleteNode(node.right, tempNode.key)
            }
        }
        return node
    }

    findMinNode(node){
        while(node.left !== null){
            node=node.left
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
