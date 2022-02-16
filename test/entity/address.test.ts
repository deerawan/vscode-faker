import { Address } from '../../src/entity/address';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Address Entity Tests', () => {
  const address = new Address();

  it('has name', () => {
    expect(address.getName()).toEqual('address');
  });

  it('has method', () => {
    expect(address.getMethods()).toEqual([
      'zipCode',
      'zipCodeByState',
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
      'direction',
      'cardinalDirection',
      'ordinalDirection',
      'nearbyGPSCoordinate',
      'timeZone',
    ]);
  });

  itShouldReturnFakerValue(address);
});
