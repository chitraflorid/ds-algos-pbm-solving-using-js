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
        
        postOrderTraversal() {
          let elements = [];
          const {left, right, data} = this;
          
          if (left) {
            elements = [...elements, ...left.postOrderTraversal()];
          }
          
          if (right) {
            elements = [...elements, ...right.postOrderTraversal()];
          }
          
          elements.push(data);
          
          return elements;
        }
        
        preOrderTraversal() {
          let ele = [];
          const {left, right, data} = this;
          
          ele.push(data);
          
          if (left) {
            ele = [...ele, ...left.preOrderTraversal()];
          } 
          
          if (right) {
            ele = [...ele, ...right.preOrderTraversal()];
          }
          
          return ele;
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
        
        /**
         * finds minimum element in entire binary tree
         * @return {BSTNode}
        **/
        findMin() {
        	let min;
          
          if (!this.root) {
            return false;
          }
          
          let leftNode = this.root.left;
          
          while (leftNode) {
          	min = leftNode.data;
            leftNode = leftNode.left;
          }
          
          return min;
        }
        
       /**
        * finds maximum element in entire binary tree
        * @return {BSTNode}
       **/
       findMax() {
       	 let max;
         
         if (!this.root) {
           return false;
         }
         
         let rightNode = this.root.right;
         
         while (rightNode) {
         		max = rightNode.data;
           rightNode = rightNode.right;
         }
         
         return max;
       }
       
       /**
        * Calculates the sum of all elements in the tree.
        * @return {Number}
       **/
       calculateSum(node) {
       let sum = 0;
       
       if (!node) {
       return sum;
       }
       
       sum = node.data;
       
       const {left, right} = node;
         
         let leftSum = left ? this.calculateSum(left) : 0;
         let rightSum = right ? this.calculateSum(right) : 0;
         

         return sum + leftSum + rightSum;
         
       }
       
       /**
        * Post order traversal list
        * @return {BSTNode}
       **/
       createPostOrderList() {
         return this.root.postOrderTraversal();
       }
       
       /**
        * Pre-order traversal list
        * @return {BSTNode}
       **/
       createPreOrderList() {
         return this.root.preOrderTraversal();
       }
    }

    const bsTree = new BST();

    [11, 6, 8, 19, 4, 10, 5, 17, 43, 49, 31].forEach(item => bsTree.insert(item));

   // bsTree.delete(6);
    
    console.log("calculate sum of all nodes::");
   console.log(bsTree.calculateSum(bsTree.root));
    
    //console.log("Post Order Traveral List::");
   // console.log(bsTree.createPostOrderList());
    
    //console.log("Pre Order Traversal List::;");
    //console.log(bsTree.createPreOrderList());
    
   // console.log( "find min::")
   // console.log(bsTree.findMin());
    
    //console.log("findMax::");
    //console.log(bsTree.findMax());   
    
