const chai = require('chai');
import { Random } from '../../src/entity/random';

const expect = chai.expect;

suite("Random Entity Tests", () => {
  let random;

  before(function() {
    random = new Random();
  });

  test("has name", () => {
    expect(random.getName()).to.equal('random');
  });

  test("has method", () => {
    expect(random.getMethods()).to.eql([
      'number',
      'arrayElement',
      'objectElement',
      'uuid',
      'boolean',
      'word',
      'words',
      'image',
      'locale',
      'alphaNumeric'
    ]);
  });
});
