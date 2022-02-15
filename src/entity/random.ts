import { FakerEntity } from './faker-entity';

export class Random implements FakerEntity {
  public getName() {
    return 'random';
  }

  public getMethods() {
    return [
      'arrayElement',
      'arrayElements',
      'objectElement',
      'word',
      'words',
      'locale',
      'alpha',
      'alphaNumeric',
    ];
  }
}
