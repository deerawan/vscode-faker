import { FakerEntity } from './faker-entity';

export class Mersenne implements FakerEntity {
  public getName() {
    return 'mersenne';
  }

  public getMethods() {
    // does not support `seed` and 'seed_array` because they take argument
    return ['rand'];
  }
}
