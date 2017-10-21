const chai = require('chai');
import { Commerce } from '../../src/entity/commerce';

const expect = chai.expect;

suite('Commerce Entity Tests', () => {
  let commerce;

  before(function() {
    commerce = new Commerce();
  });

  test('has name', () => {
    expect(commerce.getName()).to.equal('commerce');
  });

  test('has method', () => {
    expect(commerce.getMethods()).to.eql([
      'color',
      'department',
      'productName',
      'price',
      'productAdjective',
      'productMaterial',
      'product',
    ]);
  });
});
