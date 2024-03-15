import { FakerEntity } from './faker-entity';

export class Image implements FakerEntity {
  public getName() {
    return 'image';
  }

  public getMethods() {
    return ['avatar', 'url', 'dataUri'];
  }
}
