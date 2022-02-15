import { Commerce } from '../../src/entity/commerce';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Commerce Entity Tests', () => {
  const commerce = new Commerce();

  it('has name', () => {
    expect(commerce.getName()).toEqual('commerce');
  });

  it('has method', () => {
    expect(commerce.getMethods()).toEqual([
      'color',
      'department',
      'productName',
      'price',
      'productAdjective',
      'productMaterial',
      'product',
      'productDescription',
    ]);
  });

  itShouldReturnFakerValue(commerce);
});
