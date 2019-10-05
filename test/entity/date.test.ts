const chai = require('chai');
import { Date } from '../../src/entity/date';

const expect = chai.expect;

describe('Date Entity Tests', () => {
  let date;

  before(function() {
    date = new Date();
  });

  it('has name', () => {
    expect(date.getName()).to.equal('date');
  });

  it('has method', () => {
    expect(date.getMethods()).to.eql([
      'past',
      'future',
      'between',
      'recent',
      'month',
      'weekday',
    ]);
  });
});
