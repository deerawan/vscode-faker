import { FakerEntity } from './faker-entity';

export class Datatype implements FakerEntity {
  public getName() {
    return 'datatype';
  }

  public getMethods() {
    return ['boolean'];
  }
}
