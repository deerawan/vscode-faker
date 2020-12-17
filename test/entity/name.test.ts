const chai = require('chai');
import { Name } from '../../src/entity/name';

const expect = chai.expect;

describe('Name Entity Tests', () => {
  let name;

  before(function () {
    name = new Name();
  });

  it('has name', () => {
    expect(name.getName()).to.equal('name');
  });

  it('has method', () => {
    expect(name.getMethods()).to.eql([
      'firstName',
      'lastName',
      'findName',
      'jobTitle',
      'gender',
      'prefix',
      'suffix',
      'title',
      'jobDescriptor',
      'jobArea',
      'jobType',
    ]);
  });
});
