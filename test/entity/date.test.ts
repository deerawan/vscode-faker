const chai = require('chai');
import { Date } from '../../src/entity/date';

const expect = chai.expect;

suite("Date Entity Tests", () => {
  let date;

  before(function() {
    date = new Date();
  });

  test("has name", () => {
    expect(date.getName()).to.equal('date');
  });

  test("has method", () => {
    expect(date.getMethods()).to.eql([
      'past',
      'future',
      'between',
      'recent',
      'month',
      'weekday'
    ]);
  });
});
