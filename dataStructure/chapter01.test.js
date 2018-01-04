const chai = require('chai');
const assertArrays = require('chai-arrays');
const chapter01 = require('./chapter01');
chai.use(assertArrays);
let expect = chai.expect;

describe('subject1', function() {
    it('由大到小输出', function() {
        expect(
            chapter01.subject1(1, 2, 3)
        ).to.be.equal('3,2,1');
    });
});


describe('subject2', function() {
    it('在递增序列中插入一个x,不改变顺序。', function() {
        expect(
            chapter01.subject2([1, 5, 6, 7, 9], 2)
        ).to.be.equalTo([1, 2, 5, 6, 7, 9]);
    });
});


describe('subject3', function() {
    it('一个数组的逆序', function() {
        expect(
            chapter01.subject3([1, 5, 6, 7, 9])
        ).to.be.equalTo([9, 7, 6, 5, 1]);
    });
});

describe('subject4', function() {
    it('A数组中去除B与C数组中相同的元素', function() {
        expect(
            chapter01.subject4([1, 5, 6, 7, 9], [2, 6, 8, 9], [6, 8, 9])
        ).to.be.equalTo([1, 5, 7]);
    });
});