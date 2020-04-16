// construct BST from the given array
// const inputArr = [11, 6, 8, 19, 4, 10, 5, 17, 43, 49, 31];

class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const { root } = this;

        if (!this.root) {
            this.root = new BSTNode(data);
        } else {
            this.updateBST(root, new BSTNode(data));
        }
    }

    updateBST(root, newNode) {
        const { data: rootData } = root;
        const { data: nodeVal } = newNode;

        if (!root) {
            return;
        }

        if (nodeVal < rootData) {
            if (!root.left) {
                root.left = newNode;

                return;
            }

            root = root.left;
        } else {
            if (!root.right) {
                root.right = newNode;

                return;
            }

            root = root.right;
        }

        this.updateBST(root, newNode);
    }
}

const bsTree = new BST();

[11, 6, 8, 19, 4, 10, 5, 17, 43, 49, 31].forEach(item => bsTree.insert(item));

console.log( "BST Tree::");
console.log(bsTree);
