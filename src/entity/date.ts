import { FakerEntity } from './faker-entity';

export class Date implements FakerEntity {
  public getName() {
    return 'date';
  }

  public getMethods() {
    return ['past', 'future', 'between', 'recent', 'month', 'weekday'];
  }
}
