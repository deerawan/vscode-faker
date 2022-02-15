import { Date } from '../../src/entity/date';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Date Entity Tests', () => {
  const date = new Date();

  it('has name', () => {
    expect(date.getName()).toEqual('date');
  });

  it('has method', () => {
    expect(date.getMethods()).toEqual([
      'past',
      'future',
      'between',
      'recent',
      'soon',
      'month',
      'weekday',
    ]);
  });

  itShouldReturnFakerValue(date);
});
