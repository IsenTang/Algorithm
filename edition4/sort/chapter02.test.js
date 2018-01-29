const chai = require('chai');
const assertArrays = require('chai-arrays');
const chapter02 = require('./chapter02');
chai.use(assertArrays);
let expect = chai.expect;

describe('归并排序（手摇法）', function() {
    it('由小到大输出', function() {
        expect(
            chapter02.subject1([10, 30, 50, 60, 80, 20, 25, 55, 65, 73], false, 0, 5)
        ).to.be.equalTo([10, 20, 25, 30, 50, 55, 60, 65, 73, 80]);
    });
});


describe('快速排序', function() {
    it('由小到大输出', function() {
        expect(
            chapter02.subject2([30, 10, 50, 60, 80, 20, 25, 55, 65, 73])
        ).to.be.equalTo([10, 20, 25, 30, 50, 55, 60, 65, 73, 80]);
    });
});