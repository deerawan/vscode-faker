import { FakerEntity } from './faker-entity';

export class Location implements FakerEntity {
  public getName() {
    return 'location';
  }

  public getMethods() {
    return [
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
    ];
  }
}
