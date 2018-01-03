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

    //中序遍历  从小到大排序
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

        this.result = () => arr;


        orderTraversal(treeNode, cb);
    },

    //前序遍历 复制 效率高。
    PreOrderTraversal: function(treeNode) {
        let node = {};
        const copyTraversal = (treeNode, node) => {
            preCopyTraversal(treeNode, node);
        };

        const preCopyTraversal = (treeNode, node) => {
            if (treeNode !== null) {
                node.key = treeNode.key;
                if (treeNode.left !== null) {
                    node.left = {};
                    node.left.key = treeNode.left.key;
                    preCopyTraversal(treeNode.left, node.left);
                } else {
                    node.left = null;
                }

                if (treeNode.right !== null) {
                    node.right = {};
                    node.right.key = treeNode.right.key;
                    preCopyTraversal(treeNode.right, node.right);
                } else {
                    node.right = null;
                }
            }
        };

        this.result = () => node;


        copyTraversal(treeNode, node);
    },

    //后序遍历 操作系统文件遍历
    PostOrderTraversal: function(treeNode) {
        let arr = new Array();
        const orderTraversal = (treeNode, cb) => {
            postOrderTraversal(treeNode, cb);
        };

        const postOrderTraversal = (treeNode, cb) => {
            if (treeNode !== null) {
                postOrderTraversal(treeNode.left, cb);
                postOrderTraversal(treeNode.right, cb);
                cb(treeNode.key);
            }
        };

        let cb = (key) => {
            arr.push(key);
        };

        orderTraversal(treeNode, cb);
        this.result = () => arr;
    },

    max: (treeNode) => {
        let result = 0;
        const maxTreeNode = (treeNode) => {
            getMaxTreeNode(treeNode);
        };

        const getMaxTreeNode = (treeNode) => {
            if (treeNode !== null) {
                if (treeNode.right !== null) {
                    getMaxTreeNode(treeNode.right);
                } else {
                    result = treeNode.key;
                }
            }
        };

        maxTreeNode(treeNode);
        return result;
    },
    min: (treeNode) => {
        let result = 0;
        const minTreeNode = (treeNode) => {
            getMinTreeNode(treeNode);
        };

        const getMinTreeNode = (treeNode) => {
            if (treeNode !== null) {
                if (treeNode.left !== null) {
                    getMinTreeNode(treeNode.left);
                } else {
                    result = treeNode.key;
                }
            }
        };

        minTreeNode(treeNode);
        return result;
    },
    getIndex: (treeNode, num) => {
        let result = {};
        if (treeNode === null) {
            result.state = false;
            return result;
        }

        const index = (treeNode, num) => {
            if (num === treeNode.key) {
                result.state = true;
                result.num = num;
            } else {
                if (num > treeNode.key) {
                    if (treeNode.right !== null)
                        index(treeNode.right, num);
                    else {
                        result.state = false;
                        result.num = num;
                    }
                } else {
                    if (treeNode.left !== null)
                        index(treeNode.left, num);
                    else {
                        result.state = false;
                        result.num = num;
                    }
                }
            }
        };

        index(treeNode, num);
        return result;
    },
    remove: (treeNode, num) => {
        let result = {};
        if (treeNode === null) {
            result.state = false;
            return result;
        }

        // const indexAndRemove = (treeNode, num) => {

        // };

        // indexAndRemove(treeNode, num);
        // return result;
    }

};