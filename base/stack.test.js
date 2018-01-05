const chai = require('chai');
const assertArrays = require('chai-arrays');
const Stack = require('./stack');
chai.use(assertArrays);
let expect = chai.expect;

describe('build stack by javascript', function() {
    it('build stack', function() {
        expect(
            build(1)
        ).to.be.equalTo([1]);
    });
});


function build(x) {
    let stack = new Stack();
    stack.push(x);
    return stack.data;
}