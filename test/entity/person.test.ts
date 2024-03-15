import { Person } from '../../src/entity/person';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Person Entity Tests', () => {
  const person = new Person();

  it('has person', () => {
    expect(person.getName()).toEqual('person');
  });

  it('has method', () => {
    expect(person.getMethods()).toEqual([
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
    ]);
  });

  itShouldReturnFakerValue(person);
});
