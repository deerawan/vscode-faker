import { FakerEntity } from './faker-entity';

export class Animal implements FakerEntity {
  public getName() {
    return 'animal';
  }

  public getMethods() {
    return [
      'dog',
      'cat',
      'snake',
      'bear',
      'lion',
      'cetacean',
      'horse',
      'bird',
      'cow',
      'fish',
      'crocodilia',
      'insect',
      'rabbit',
    ];
  }
}
