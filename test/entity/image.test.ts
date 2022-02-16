import { Image } from '../../src/entity/image';
import { itShouldReturnFakerValue } from '../test-helper';

describe('image Entity Tests', () => {
  const image = new Image();

  it('has name', () => {
    expect(image.getName()).toEqual('image');
  });

  it('has method', () => {
    expect(image.getMethods()).toEqual([
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
    ]);
  });

  itShouldReturnFakerValue(image);
});
