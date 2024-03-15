import { Image } from '../../src/entity/image';
import { itShouldReturnFakerValue } from '../test-helper';

describe('image Entity Tests', () => {
  const image = new Image();

  it('has name', () => {
    expect(image.getName()).toEqual('image');
  });

  it('has method', () => {
    expect(image.getMethods()).toEqual(['avatar', 'url', 'dataUri']);
  });

  itShouldReturnFakerValue(image);
});
