import { Music } from '../../src/entity/music';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Music Entity Tests', () => {
  const music = new Music();

  it('has name', () => {
    expect(music.getName()).toEqual('music');
  });

  it('has method', () => {
    expect(music.getMethods()).toEqual(['genre']);
  });

  itShouldReturnFakerValue(music);
});
