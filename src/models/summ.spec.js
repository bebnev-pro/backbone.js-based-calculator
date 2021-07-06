const Summ = require('./summ');
const chai = require('chai');
const expect = chai.expect;

describe('Models -> Summ', function() {
  it('Summ should be created and have 0 value', function() {
    const summ = new Summ();
    expect(summ).to.be.ok;
    expect(summ).to.have.property('attributes');
    expect(summ.attributes).to.have.property('summ');
    expect(summ.attributes.summ).to.equal(0)
  });
});