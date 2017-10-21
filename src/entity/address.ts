import { FakerEntity } from './faker-entity';

export class Address implements FakerEntity {
  public getName() {
    return 'address';
  }

  public getMethods() {
    return [
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
    ];
  }
}
