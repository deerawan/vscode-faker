import { FakerEntity } from './faker-entity';

export class Person implements FakerEntity {
  public getName() {
    return 'person';
  }

  public getMethods() {
    return [
      'firstName',
      'lastName',
      'fullName',
      'jobTitle',
      'gender',
      'prefix',
      'suffix',
      'jobDescriptor',
      'jobArea',
      'jobType',
    ];
  }
}
