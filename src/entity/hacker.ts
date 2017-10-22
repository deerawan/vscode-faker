import { FakerEntity } from './faker-entity';

export class Hacker implements FakerEntity {
  public getName() {
    return 'hacker';
  }

  public getMethods() {
    return ['abbreviation', 'adjective', 'noun', 'verb', 'ingverb', 'phrase'];
  }
}
