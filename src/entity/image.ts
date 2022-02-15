import { FakerEntity } from './faker-entity';

export class Image implements FakerEntity {
  public getName() {
    return 'image';
  }

  public getMethods() {
    return [
      'image',
      'avatar',
      'imageUrl',
      'abstract',
      'animals',
      'business',
      'cats',
      'city',
      'food',
      'nightlife',
      'fashion',
      'people',
      'nature',
      'sports',
      'technics',
      'transport',
      'dataUri',
    ];
  }
}
