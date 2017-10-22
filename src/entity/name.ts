import { FakerEntity } from './faker-entity';

export class Name implements FakerEntity {
  public getName() {
    return 'name';
  }

  public getMethods() {
    return [
      'firstName',
      'lastName',
      'findName',
      'jobTitle',
      'prefix',
      'suffix',
      'title',
      'jobDescriptor',
      'jobArea',
      'jobType',
    ];
  }
}
