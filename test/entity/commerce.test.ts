const chai = require('chai');
import { Commerce } from '../../src/entity/commerce';

const expect = chai.expect;

describe('Commerce Entity Tests', () => {
  let commerce;

  before(function () {
    commerce = new Commerce();
  });

  it('has name', () => {
    expect(commerce.getName()).to.equal('commerce');
  });

  it('has method', () => {
    expect(commerce.getMethods()).to.eql([
      'color',
      'department',
      'productName',
      'price',
      'productAdjective',
      'productMaterial',
      'product',
      'productDescription',
    ]);
  });
});
