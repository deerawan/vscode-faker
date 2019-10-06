const chai = require('chai');
import { Hacker } from '../../src/entity/hacker';

const expect = chai.expect;

describe('Hacker Entity Tests', () => {
  let hacker;

  before(function() {
    hacker = new Hacker();
  });

  it('has name', () => {
    expect(hacker.getName()).to.equal('hacker');
  });

  it('has method', () => {
    expect(hacker.getMethods()).to.eql([
      'abbreviation',
      'adjective',
      'noun',
      'verb',
      'ingverb',
      'phrase',
    ]);
  });
});
