// construct BST from the given array
// const inputArr = [11, 6, 8, 19, 4, 10, 5, 17, 43, 49, 31];

class BSTNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    /**
     * Checks whether the current node is leaf node or not.
     * @return {boolean}
     */
    isLeafNode() {
        if (!this.left && !this.right) {
            return true;
        }

        return false;
    }

    /**
     * Checks whether the node has only one child.
     * @return {boolean}
     */
    hasOnlyOneChild() {
        if (this.left && !this.right || this.right && !this.left) return true;

        return false;
    }

    hasLeftNode() {
        return !!this.left;
    }

    hasRightNode() {
        return !!this.right;
    }
}

class BST {
    constructor() {
        this.root = null;
        this.inOrderList = [];
    }

    /**
     * Inserts the given value to the BST.
     * @param data
     */
    insert(data) {
        const { root } = this;
        const newNode = new BSTNode(data);
        
        if (!this.root) {
            this.root = newNode;
        } else {
            this.updateBST(root, newNode);
        }
    }

    /**
     * Returns the node when the given data is present in BST.
     * @param data
     * @param {BSTNode} root - current root node
     * @return {BSTNode}
     */
    findNode(data, root) {
        if (root.data === data) {
            return root;
        }

        if (data < root.data) {
            root = root.left;
        } else {
            root = root.right;
        }

        return this.findNode(data, root);
    }

    /**
     * returns the parent node for the given value if its found in the BST.
     * @param data
     * @param {BSTNode} root
     * @return {BSTNode}
     */
    findParent(data, root) {
        if (!root) {
            return;
        }

        const { left = {}, right = {} } = root;

        if (left && left.data === data || right && right.data === data) {
            return root;
        }

        if (data < root.data) {
            root = left;
        } else {
            root = right;
        }

        return this.findParent(data, root);
    }

    /**
     * Creates InOrder list of the BST nodes.
     */
    createInorderList(node) {
        if (!node) {
            return;
        }

        const { left, right } = node;

        this.createInorderList(left);
        this.inOrderList.push(node.data);
        this.createInorderList(right);
    }

    /**
     * Updates the BST with the given node at its right position.
     * @param {BSTNode} root
     * @param {BSTNode} newNode
     */
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

    /**
     * deletes the given value from the BST.
     * @param {number} data
     */
    delete(data) {
        const currentNode = this.findNode(data, this.root);
        const parent = this.findParent(data, this.root);
        const isLeftChild = parent.left && parent.left.data === currentNode.data;

        if (currentNode.isLeafNode()) {
            if (isLeftChild) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        }

        if (currentNode.hasOnlyOneChild()) {
            if (currentNode.hasLeftNode()) {
                parent.left = currentNode.left;
            } else {
                parent.right = currentNode.right;
            }
        } else {
            this.createInorderList(this.root);

            const predecessor = this.inOrderList[this.inOrderList.indexOf(data) - 1];
            const predecessorParent = this.findParent(predecessor, this.root);

            if (predecessorParent.left && predecessorParent.left.data === predecessor) {
                predecessorParent.left = null;
            } else {
                predecessorParent.right = null;
            }

            currentNode.data = predecessor;
        }

        return true;
    }
}

const bsTree = new BST();

[11, 6, 8, 19, 4, 10, 5, 17, 43, 49, 31].forEach(item => bsTree.insert(item));

bsTree.delete(6);
