const chai = require('chai');
import { Address } from '../../src/entity/address';

const expect = chai.expect;

describe('Address Entity Tests', () => {
  let address;

  before(function() {
    address = new Address();
  });

  it('has name', () => {
    expect(address.getName()).to.equal('address');
  });

  it('has method', () => {
    expect(address.getMethods()).to.eql([
      'zipCode',
      'city',
      'cityPrefix',
      'citySuffix',
      'streetName',
      'streetAddress',
      'streetSuffix',
      'streetPrefix',
      'secondaryAddress',
      'county',
      'country',
      'countryCode',
      'state',
      'stateAbbr',
      'latitude',
      'longitude',
    ]);
  });
});
