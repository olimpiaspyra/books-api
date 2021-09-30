const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('formatFullname', () => {

  it("should return an error if there is no arg", () => {
    expect(formatFullname(undefined, 20)).to.equal('Error');
  });

  it('should return an error if "Fullname" arg is not a string', () => {      
    expect(formatFullname(12, 20)).to.equal('Error');
    expect(formatFullname({}, 20)).to.equal('Error');
    expect(formatFullname([], 20)).to.equal('Error');
    expect(formatFullname(function() {}, 20)).to.equal('Error');
  
  });  

  it('should return an error if "FullName" contains one or more then two words', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Doe test')).to.equal('Error');
  });

  it("should return correct format <firstName> and <lastName>", () => {
    expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('JOHN doE')).to.equal('John Doe');
  });

});