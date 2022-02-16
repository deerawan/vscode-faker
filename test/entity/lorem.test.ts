import { Lorem } from '../../src/entity/lorem';
import { itShouldReturnFakerValue } from '../test-helper';

describe('lorem Entity Tests', () => {
  const lorem = new Lorem();

  it('has name', () => {
    expect(lorem.getName()).toEqual('lorem');
  });

  it('has method', () => {
    expect(lorem.getMethods()).toEqual([
      'word',
      'words',
      'sentence',
      'slug',
      'sentences',
      'paragraph',
      'paragraphs',
      'text',
      'lines',
    ]);
  });

  itShouldReturnFakerValue(lorem);
});
