import { Animal } from '../../src/entity/animal';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Animal Entity Tests', () => {
  const animal = new Animal();

  it('has name', () => {
    expect(animal.getName()).toEqual('animal');
  });

  it('has method', () => {
    expect(animal.getMethods()).toEqual([
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
    ]);
  });

  itShouldReturnFakerValue(animal);
});
