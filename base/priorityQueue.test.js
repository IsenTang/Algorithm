const chai = require('chai');
const assertArrays = require('chai-arrays');
const priorityQueue = require('./priorityQueue');
chai.use(assertArrays);
let expect = chai.expect;

describe('priorityQueue', function() {
    it('insert(上浮)', function() {
        expect(
            build([4, 8, 7, 9, 5])
        ).to.be.equalTo([9, 8, 7, 4, 5]);
    });
});


function build(arr) {
    let queue = new priorityQueue();
    arr.forEach((item) => {
        queue.insert(item);
    });
    return queue.data;
}

describe('priorityQueue', function() {
    it('remove(下沉)', function() {
        expect(
            remove([9, 8, 7, 4, 5])
        ).to.be.equalTo([8, 5, 7, 4]);
    });
});


function remove(arr) {
    let queue = new priorityQueue();
    queue.data = arr;
    queue.remove();
    return queue.data;
}

describe('priorityQueue', function() {
    it('max(首位最大)', function() {
        expect(
            max([4, 8, 7, 9, 5])
        ).to.be.equal(9);
    });
});

function max(arr) {
    let queue = new priorityQueue();
    arr.forEach((item) => {
        queue.insert(item);
    });
    return queue.max();
}