const chai = require('chai');
import { Random } from '../../src/entity/random';

const expect = chai.expect;

describe('Random Entity Tests', () => {
  let random;

  before(function () {
    random = new Random();
  });

  it('has name', () => {
    expect(random.getName()).to.equal('random');
  });

  it('has method', () => {
    expect(random.getMethods()).to.eql([
      'number',
      'float',
      'arrayElement',
      'arrayElements',
      'objectElement',
      'uuid',
      'boolean',
      'word',
      'words',
      'image',
      'locale',
      'alpha',
      'alphaNumeric',
      'hexaDecimal',
    ]);
  });
});
