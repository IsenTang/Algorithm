'use strict';

module.exports = {
    BinaryTree: function() {
        //root
        let root = null;

        function TreeNode(key) {
            this.key = key;
            this.left = null;
            this.right = null;
        }

        //insert
        this.insert = (key) => {
            let newNode = new TreeNode(key);
            if (root === null) {
                root = newNode;
            } else {
                insertNode(root, newNode);
            }
            return root;
        };

        const insertNode = (node, newNode) => {
            if (node.key > newNode.key) {
                if (node.left === null) {
                    node.left = newNode;
                } else {
                    insertNode(node.left, newNode);
                }
            } else {
                if (node.right === null) {
                    node.right = newNode;
                } else {
                    insertNode(node.right, newNode);
                }
            }
        };

    },

    //中序遍历
    InOrderTraversal: function(treeNode) {
        let arr = new Array();


        const orderTraversal = (treeNode, cb) => {
            orderTraversalNode(treeNode, cb);
        };

        const orderTraversalNode = (treeNode, cb) => {
            if (treeNode !== null) {
                orderTraversalNode(treeNode.left, cb);
                cb(treeNode.key);
                orderTraversalNode(treeNode.right, cb);
            }
        };


        let cb = (key) => {
            arr.push(key);
        };

        this.result = () => {
            return arr;
        };


        orderTraversal(treeNode, cb);
    }

};