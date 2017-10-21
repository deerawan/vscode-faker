import { FakerEntity } from './faker-entity';

export class Company implements FakerEntity {
  public getName() {
    return 'company';
  }

  public getMethods() {
    return [
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
    ];
  }
}
