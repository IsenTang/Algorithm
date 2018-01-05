const chai = require('chai');
const assertArrays = require('chai-arrays');
const Queue = require('./queue');
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
    let queue = new Queue();
    queue.push(x);
    return queue.data;
}