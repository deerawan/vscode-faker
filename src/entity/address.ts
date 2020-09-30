import { FakerEntity } from './faker-entity';

export class Address implements FakerEntity {
  public getName() {
    return 'address';
  }

  public getMethods() {
    return [
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
    ];
  }
}
