const chai = require('chai');
import { Name } from '../../src/entity/name';

const expect = chai.expect;

suite('Name Entity Tests', () => {
  let name;

  before(function() {
    name = new Name();
  });

  test('has name', () => {
    expect(name.getName()).to.equal('name');
  });

  test('has method', () => {
    expect(name.getMethods()).to.eql([
      'firstName',
      'lastName',
      'findName',
      'jobTitle',
      'prefix',
      'suffix',
      'title',
      'jobDescriptor',
      'jobArea',
      'jobType',
    ]);
  });
});
