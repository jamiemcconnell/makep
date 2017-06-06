const expect = require('chai').expect;
const sinon = require('sinon');
//const makep = require('../makep');

describe('makep', function() {

  beforeEach(function() {
    sinon.spy(console, 'log');
  });

  afterEach(function() {
    console.log.restore();
  });

  it('should display the scripts in package.json file', function() {
    console.log('---');
    require('../makep').makep();
    console.log('---==');
  });

});
