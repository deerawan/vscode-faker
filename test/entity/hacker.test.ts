import { Hacker } from '../../src/entity/hacker';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Hacker Entity Tests', () => {
  const hacker = new Hacker();

  it('has name', () => {
    expect(hacker.getName()).toEqual('hacker');
  });

  it('has method', () => {
    expect(hacker.getMethods()).toEqual([
      'abbreviation',
      'adjective',
      'noun',
      'verb',
      'ingverb',
      'phrase',
    ]);
  });

  itShouldReturnFakerValue(hacker);
});
