import { FakerEntity } from './faker-entity';

export class Time implements FakerEntity {
  public getName() {
    return 'time';
  }

  public getMethods() {
    return ['recent'];
  }
}
