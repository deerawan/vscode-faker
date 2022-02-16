import { Random } from '../../src/entity/random';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Random Entity Tests', () => {
  const random = new Random();

  it('has name', () => {
    expect(random.getName()).toEqual('random');
  });

  it('has method', () => {
    expect(random.getMethods()).toEqual([
      'arrayElement',
      'arrayElements',
      'objectElement',
      'word',
      'words',
      'locale',
      'alpha',
      'alphaNumeric',
    ]);
  });

  itShouldReturnFakerValue(random);
});
