import * as chai from 'chai';
import { Phone } from '../../src/entity/phone';

const expect = chai.expect;

suite("Phone Entity Tests", () => {
  let phone;

  before(function() {
    phone = new Phone();
  });

  test("has name", () => {
    expect(phone.getName()).to.equal('phone');
  });

  test("has method", () => {
    expect(phone.getMethods()).to.eql([
      'phoneNumber',
      'phoneNumberFormat',
      'phoneFormats'
    ]);
  });
});
