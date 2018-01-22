const chai = require('chai');
const assertArrays = require('chai-arrays');
const chapter01 = require('./chapter01');
chai.use(assertArrays);
let expect = chai.expect;

describe('选择排序', function() {
    it('由小到大输出', function() {
        expect(
            chapter01.subject1([2, 4, 6, 1, 5, 3], false)
        ).to.be.equalTo([1, 2, 3, 4, 5, 6]);
    });
});


describe('选择排序', function() {
    it('由大到小输出', function() {
        expect(
            chapter01.subject1([2, 4, 6, 1, 5, 3], true)
        ).to.be.equalTo([6, 5, 4, 3, 2, 1]);
    });
});



describe('插入排序', function() {
    it('由大到小输出', function() {
        expect(
            chapter01.subject2([2, 4, 6, 1, 5, 3], true)
        ).to.be.equalTo([6, 5, 4, 3, 2, 1]);
    });
});

describe('插入排序', function() {
    it('由小到大输出', function() {
        expect(
            chapter01.subject2([2, 4, 6, 1, 5, 3], false)
        ).to.be.equalTo([1, 2, 3, 4, 5, 6]);
    });
});

describe('希尔排序', function() {
    it('由大到小输出', function() {
        expect(
            chapter01.subject3([2, 4, 6, 7, 1, 5, 3, 8], true)
        ).to.be.equalTo([8, 7, 6, 5, 4, 3, 2, 1]);
    });
});

describe('希尔排序', function() {
    it('由小到大输出', function() {
        expect(
            chapter01.subject3([2, 4, 6, 1, 5, 3], false)
        ).to.be.equalTo([1, 2, 3, 4, 5, 6]);
    });
});