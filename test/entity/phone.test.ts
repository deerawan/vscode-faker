import { Phone } from '../../src/entity/phone';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Phone Entity Tests', () => {
  const phone = new Phone();

  it('has name', () => {
    expect(phone.getName()).toEqual('phone');
  });

  it('has method', () => {
    expect(phone.getMethods()).toEqual(['number']);
  });

  itShouldReturnFakerValue(phone);
});
