const chai = require('chai');
import { Company } from '../../src/entity/company';

const expect = chai.expect;

describe('Company Entity Tests', () => {
  let company;

  before(function() {
    company = new Company();
  });

  it('has name', () => {
    expect(company.getName()).to.equal('company');
  });

  it('has method', () => {
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
      'bsNoun',
    ]);
  });
});
