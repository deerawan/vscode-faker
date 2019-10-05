const chai = require('chai');
import { Phone } from '../../src/entity/phone';

const expect = chai.expect;

describe('Phone Entity Tests', () => {
  let phone;

  before(function() {
    phone = new Phone();
  });

  it('has name', () => {
    expect(phone.getName()).to.equal('phone');
  });

  it('has method', () => {
    expect(phone.getMethods()).to.eql([
      'phoneNumber',
      'phoneNumberFormat',
      'phoneFormats',
    ]);
  });
});
