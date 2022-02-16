import { Time } from '../../src/entity/time';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Time Entity Tests', () => {
  const time = new Time();

  it('has name', () => {
    expect(time.getName()).toEqual('time');
  });

  it('has method', () => {
    expect(time.getMethods()).toEqual(['recent']);
  });

  itShouldReturnFakerValue(time);
});
