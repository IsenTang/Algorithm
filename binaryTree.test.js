const BinaryTree = require('./binaryTree').BinaryTree;
const InOrderTraversal = require('./binaryTree').InOrderTraversal;
const PreOrderTraversal = require('./binaryTree').PreOrderTraversal;
const PostOrderTraversal = require('./binaryTree').PostOrderTraversal;
const max = require('./binaryTree').max;
const min = require('./binaryTree').min;
const getIndex = require('./binaryTree').getIndex;
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);


let expect = chai.expect;

//中序遍历
describe('binaryTree inOrder traversal test', function() {
    it('result should be [1,2,3,4,5,6]', function() {
        expect(
            inOrderTraversal()
        ).to.be.equalTo([1, 2, 3, 4, 5, 6]);
    });
});


function inOrderTraversal() {
    let arr = [2, 4, 3, 1, 6, 5];
    let binaryTree = new BinaryTree();
    let root = null;
    for (let i = 0; i < arr.length; i++) {
        root = binaryTree.insert(arr[i]);
    }
    let traversal = new InOrderTraversal(root);
    return traversal.result();
}

//前序排序
describe('binaryTree  preOrder traversal test', function() {
    it('', function() {
        expect(
            preOrderTraversal()
        ).to.deep.equal(obj);
    });
});

function preOrderTraversal() {
    let arr = [2, 4, 3, 1, 6, 5];
    let binaryTree = new BinaryTree();
    let root = null;
    for (let i = 0; i < arr.length; i++) {
        root = binaryTree.insert(arr[i]);
    }
    let traversal = new PreOrderTraversal(root);
    return traversal.result();
}

const obj = {
    key: 2,
    left: { key: 1, left: null, right: null },
    right: {
        key: 4,
        left: { key: 3, left: null, right: null },
        right: {
            key: 6,
            left: {
                key: 5,
                left: null,
                right: null
            },
            right: null
        }
    }
};


//后序排序
describe('binaryTree  postOrder traversal test', function() {
    it('', function() {
        expect(
            postOrderTraversal()
        ).to.be.equalTo([1, 3, 5, 6, 4, 2]);
    });
});

function postOrderTraversal() {
    let arr = [2, 4, 3, 1, 6, 5];
    let binaryTree = new BinaryTree();
    let root = null;
    for (let i = 0; i < arr.length; i++) {
        root = binaryTree.insert(arr[i]);
    }
    let traversal = new PostOrderTraversal(root);
    return traversal.result();
}


//最大值
describe('binaryTree  get max test', function() {
    it('max should be 6', function() {
        expect(
            getMax()
        ).to.be.equal(6);
    });
});

function getMax() {
    let arr = [2, 4, 3, 1, 6, 5];
    let binaryTree = new BinaryTree();
    let root = null;
    for (let i = 0; i < arr.length; i++) {
        root = binaryTree.insert(arr[i]);
    }
    return max(root);
}

//最小值
describe('binaryTree  get min test', function() {
    it('min should be 1', function() {
        expect(
            getMin()
        ).to.be.equal(1);
    });
});

function getMin() {
    let arr = [2, 4, 3, 1, 6, 5];
    let binaryTree = new BinaryTree();
    let root = null;
    for (let i = 0; i < arr.length; i++) {
        root = binaryTree.insert(arr[i]);
    }
    return min(root);
}


//查找
describe('binaryTree  get index test', function() {
    it('if exist should return true', function() {
        expect(
            index()
        ).to.deep.equal({ state: true, num: 6 });
    });
});

function index() {
    let arr = [2, 4, 3, 1, 6, 5];
    let binaryTree = new BinaryTree();
    let root = null;
    for (let i = 0; i < arr.length; i++) {
        root = binaryTree.insert(arr[i]);
    }
    return getIndex(root, 6);
}