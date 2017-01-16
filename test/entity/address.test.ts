import * as chai from 'chai';
import { Address } from '../../src/entity/address';

const expect = chai.expect;

suite("Address Entity Tests", () => {
  let address;

  before(function() {
    address = new Address();
  });

  test("has name", () => {
    expect(address.getName()).to.equal('address');
  });

  test("has method", () => {
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