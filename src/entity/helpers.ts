import { FakerEntity } from './faker-entity';

export class Helpers implements FakerEntity {
  public getName() {
    return 'helpers';
  }

  public getMethods() {
    return [
      'randomize',
      'slugify',
      'replaceSymbolWithNumber',
      'replaceSymbols',
      'shuffle',
      'mustache',
      'createCard',
      'contextualCard',
      'userCard',
      'createTransaction'
    ]
  }
}