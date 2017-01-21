const chai = require('chai');
import { Image } from '../../src/entity/image';

const expect = chai.expect;

suite("image Entity Tests", () => {
  let image;

  before(function() {
    image = new Image();
  });

  test("has name", () => {
    expect(image.getName()).to.equal('image');
  });

  test("has method", () => {
    expect(image.getMethods()).to.eql([
      'image',
      'avatar',
      'imageUrl',
      'abstract',
      'animals',
      'business',
      'cats',
      'city',
      'food',
      'nightlife',
      'fashion',
      'people',
      'nature',
      'sports',
      'technics',
      'transport'
    ]);
  });
});
