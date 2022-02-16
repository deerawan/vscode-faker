import { FakerEntity } from './faker-entity';

export class Datatype implements FakerEntity {
  public getName() {
    return 'datatype';
  }

  public getMethods() {
    return [
      'array',
      'bigInt',
      'boolean',
      'datetime',
      'float',
      'hexaDecimal',
      'json',
      'number',
      'string',
      'uuid',
    ];
  }
}
