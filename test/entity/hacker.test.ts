const chai = require('chai');
import { Hacker } from '../../src/entity/hacker';

const expect = chai.expect;

suite("Hacker Entity Tests", () => {
  let hacker;

  before(function() {
    hacker = new Hacker();
  });

  test("has name", () => {
    expect(hacker.getName()).to.equal('hacker');
  });

  test("has method", () => {
    expect(hacker.getMethods()).to.eql([
      'abbreviation',
      'adjective',
      'noun',
      'verb',
      'ingverb',
      'phrase'
    ]);
  });
});
