const BinaryTree = require('./binaryTree').BinaryTree;
const InOrderTraversal = require('./binaryTree').InOrderTraversal;
const chai = require('chai');
const assertArrays = require('chai-arrays');
chai.use(assertArrays);


let expect = chai.expect;

//中序遍历
describe('binary tree test', function() {
    it('result should be [1,2,3,4,5,6]', function() {
        expect(
            test()
        ).to.be.equalTo([1, 2, 3, 4, 5, 6]);
    });
});


function test() {
    let arr = [2, 4, 3, 1, 6, 5];
    let binaryTree = new BinaryTree();
    let root = null;
    for (let i = 0; i < arr.length; i++) {
        root = binaryTree.insert(arr[i]);
    }
    let traversal = new InOrderTraversal(root);
    return traversal.result();
}