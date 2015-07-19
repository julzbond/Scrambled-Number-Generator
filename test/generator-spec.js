/*
Write unit tests for the generator
*/

var chai = require("chai");
var expect = chai.expect;
var should = chai.should();
var scrambledNumberGenerator = require("../generator.js")

describe('scrambledNumberGenerator', function(){

  it('should be a function', function() {
    expect(scrambledNumberGenerator).to.be.a('function');
  });

//Calling generate(1000) should return an array that contains 1000 unique numbers (0-999)

  it('should return a random array of numbers', function(){
    var array = scrambledNumberGenerator(1000);
    expect(array).to.be.an('array');
    array.should.have.length(1000);
    expect(array).to.include.members([311, 978]);
    expect(array).to.not.include.members([1000, 2512]);
  });

//Generating the numbers twice should have a different order of numbers each time

  it('should return a different order of numbers each time the function is run', function(){
    var array = scrambledNumberGenerator(1000);
    expect(array).to.be.an('array');
    array.should.have.length(1000);
    expect(array).to.include.members([311, 978]);
    expect(array).to.not.include.members([1000, 2512]);

    var array2 = scrambledNumberGenerator(1000);
    expect(array2).to.be.an('array');
    array2.should.have.length(1000);
    expect(array).to.not.deep.equal(array2);
  });

//Passing any data type that is not a number should return error

  it('should return error if a data type that is not a number is passed through the function', function(){
    expect(scrambledNumberGenerator("hello")).to.equal("error");
    expect(scrambledNumberGenerator(null)).to.equal("error");
    expect(scrambledNumberGenerator()).to.equal("error");
    expect(scrambledNumberGenerator(true)).to.equal("error");
  })

});