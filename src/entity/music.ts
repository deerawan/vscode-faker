import { FakerEntity } from './faker-entity';

export class Music implements FakerEntity {
  public getName() {
    return 'music';
  }

  public getMethods() {
    return ['genre'];
  }
}
