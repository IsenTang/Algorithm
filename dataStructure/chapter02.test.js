const chai = require('chai');
const assertArrays = require('chai-arrays');
const chapter02 = require('./chapter02');
chai.use(assertArrays);
let expect = chai.expect;


describe('subject1', function() {
    it('非负数十进制转换进制。', function() {
        expect(
            chapter02.subject1(8, 2)
        ).to.be.equal('1000');
    });
});


describe('subject2', function() {
    it('括号匹配', function() {
        expect(
            chapter02.subject2('[()[](])')
        ).to.be.equal(false);
    });
});


describe('subject3', function() {
    it('汉诺塔', function() {
        expect(
            chapter02.subject3(4)
        ).to.be.equal(15);
    });
});

describe('subject4', function() {
    it('回字', function() {
        expect(
            chapter02.subject4('abeba')
        ).to.be.equal(true);
    });
});