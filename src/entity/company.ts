import { FakerEntity } from './faker-entity';

export class Company implements FakerEntity {
  public getName() {
    return 'company';
  }

  public getMethods() {
    return [
      'name',
      'catchPhrase',
      'buzzPhrase',
      'catchPhraseAdjective',
      'catchPhraseDescriptor',
      'catchPhraseNoun',
      'buzzAdjective',
      'buzzVerb',
      'buzzNoun',
    ];
  }
}
