import * as chai from 'chai';
import { Company } from '../../src/entity/company';

const expect = chai.expect;

suite("Company Entity Tests", () => {
  let company;

  before(function() {
    company = new Company();
  });

  test("has name", () => {
    expect(company.getName()).to.equal('company');
  });

  test("has method", () => {
    expect(company.getMethods()).to.eql([
      'suffixes',
      'companyName',
      'companySuffix',
      'catchPhrase',
      'bs',
      'catchPhraseAdjective',
      'catchPhraseDescriptor',
      'catchPhraseNoun',
      'bsAdjective',
      'bsBuzz',
      'bsNoun'
    ]);
  });
});
