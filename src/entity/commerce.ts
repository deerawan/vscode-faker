import { FakerEntity } from './faker-entity';

export class Commerce implements FakerEntity {
  public getName() {
    return 'commerce';
  }

  public getMethods() {
    return [
      'color',
      'department',
      'productName',
      'price',
      'productAdjective',
      'productMaterial',
      'product',
    ];
  }
}
