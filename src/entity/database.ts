import { FakerEntity } from './faker-entity';

export class Database implements FakerEntity {
  public getName() {
    return 'database';
  }

  public getMethods() {
    return ['column', 'type', 'collation', 'engine'];
  }
}
