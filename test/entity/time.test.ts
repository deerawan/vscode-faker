const chai = require('chai');
import { Time } from '../../src/entity/time';

const expect = chai.expect;

describe('Time Entity Tests', () => {
  let time;

  before(function () {
    time = new Time();
  });

  it('has name', () => {
    expect(time.getName()).to.equal('time');
  });

  it('has method', () => {
    expect(time.getMethods()).to.eql(['recent']);
  });
});
