import { FakerEntity } from './faker-entity';

export class Vehicle implements FakerEntity {
  public getName() {
    return 'vehicle';
  }

  public getMethods() {
    return [
      'vehicle',
      'manufacturer',
      'model',
      'type',
      'fuel',
      'vin',
      'color',
      'vrm',
      'bicycle',
    ];
  }
}
