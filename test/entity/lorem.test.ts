const chai = require('chai');
import { Lorem } from '../../src/entity/lorem';

const expect = chai.expect;

suite("lorem Entity Tests", () => {
  let lorem;

  before(function() {
    lorem = new Lorem();
  });

  test("has name", () => {
    expect(lorem.getName()).to.equal('lorem');
  });

  test("has method", () => {
    expect(lorem.getMethods()).to.eql([
      'word',
      'words',
      'sentence',
      'sentences',
      'paragraph',
      'paragraphs',
      'text',
      'lines'
    ]);
  });
});
