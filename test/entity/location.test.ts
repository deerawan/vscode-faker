import { Location } from '../../src/entity/localtion';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Location Entity Tests', () => {
  const location = new Location();

  it('has name', () => {
    expect(location.getName()).toEqual('location');
  });

  it('has method', () => {
    expect(location.getMethods()).toEqual([
      'zipCode',
      'city',
      'street',
      'streetAddress',
      'secondaryAddress',
      'county',
      'country',
      'countryCode',
      'state',
      'latitude',
      'longitude',
      'direction',
      'cardinalDirection',
      'ordinalDirection',
      'nearbyGPSCoordinate',
      'timeZone',
    ]);
  });

  itShouldReturnFakerValue(location);
});
