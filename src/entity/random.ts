import { FakerEntity } from './faker-entity';

export class Random implements FakerEntity {
  public getName() {
    return 'random';
  }

  public getMethods() {
    return [
      'number',
      'arrayElement',
      'objectElement',
      'uuid',
      'boolean',
      'word',
      'words',
      'image',
      'locale',
      'alphaNumeric'
    ]
  }
}