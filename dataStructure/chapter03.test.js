const chai = require('chai');
const assertArrays = require('chai-arrays');
const chapter03 = require('./chapter03');
chai.use(assertArrays);
let expect = chai.expect;

describe('subject1', function() {
    it('kmp', function() {
        expect(
            chapter03.subject1('abcabcd', 'abcd')
        ).to.deep.equal({ state: true });
    });
});