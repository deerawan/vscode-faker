import { Name } from '../../src/entity/name';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Name Entity Tests', () => {
  const name = new Name();

  it('has name', () => {
    expect(name.getName()).toEqual('name');
  });

  it('has method', () => {
    expect(name.getMethods()).toEqual([
      'firstName',
      'lastName',
      'findName',
      'jobTitle',
      'gender',
      'prefix',
      'suffix',
      'title',
      'jobDescriptor',
      'jobArea',
      'jobType',
    ]);
  });

  itShouldReturnFakerValue(name);
});
