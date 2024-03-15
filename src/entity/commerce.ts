import { FakerEntity } from './faker-entity';

export class Commerce implements FakerEntity {
  public getName() {
    return 'commerce';
  }

  public getMethods() {
    return [
      'department',
      'productName',
      'price',
      'productAdjective',
      'productMaterial',
      'product',
      'productDescription',
    ];
  }
}
