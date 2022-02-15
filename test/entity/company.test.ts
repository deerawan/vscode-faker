import { Company } from '../../src/entity/company';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Company Entity Tests', () => {
  const company = new Company();

  it('has name', () => {
    expect(company.getName()).toEqual('company');
  });

  it('has method', () => {
    expect(company.getMethods()).toEqual([
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

  itShouldReturnFakerValue(company);
});
