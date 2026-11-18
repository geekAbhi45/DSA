class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
}

const tree=new BinarySearchTree();

tree.root=new Node(10);
tree.root.left=new Node(20);
tree.root.right=new Node(30);
tree.root.left.left = new Node(40);
tree.root.left.right = new Node(50);

function inorder(node) {
    if (node === null) return;

    inorder(node.left);

    console.log(node.value);

    inorder(node.right);
}

inorder(tree.root);

function preorder(node) {
    if (node === null) return;

    console.log(node.value);

    preorder(node.left);
    preorder(node.right);
}

preorder(tree.root);
function postorder(node) {
    if (node === null) return;

    postorder(node.left);
    postorder(node.right);

    console.log(node.value);
}

postorder(tree.root);
class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root === null) {
            this.root = newNode;
            return this;
        }

        let current = this.root;

        while (true) {
            if (value < current.value) {

                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }

                current = current.left;

            } else if (value > current.value) {

                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }

                current = current.right;

            } else {
                return this; // Ignore duplicates
            }
        }
    }
}


