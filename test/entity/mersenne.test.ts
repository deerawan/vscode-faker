import { Mersenne } from '../../src/entity/mersenne';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Mersenne Entity Tests', () => {
  const mersenne = new Mersenne();

  it('has name', () => {
    expect(mersenne.getName()).toEqual('mersenne');
  });

  it('has method', () => {
    expect(mersenne.getMethods()).toEqual(['rand']);
  });

  itShouldReturnFakerValue(mersenne);
});
