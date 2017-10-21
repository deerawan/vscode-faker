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
      'slug',
      'sentences',
      'paragraph',
      'paragraphs',
      'text',
      'lines',
    ];
  }
}
