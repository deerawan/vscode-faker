import { FakerEntity } from './faker-entity';

export class Lorem implements FakerEntity {
  public getName() {
    return 'lorem';
  }

  public getMethods() {
    return [
      'word',
      'words',
      'sentence',
      'sentences',
      'paragraph',
      'paragraphs',
      'text',
      'lines'
    ]
  }
}