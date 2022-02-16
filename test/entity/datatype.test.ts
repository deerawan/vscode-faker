import { Datatype } from '../../src/entity/datatype';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Datatype Entity Tests', () => {
  const datatype = new Datatype();

  it('has name', () => {
    expect(datatype.getName()).toEqual('datatype');
  });

  it('has method', () => {
    expect(datatype.getMethods()).toEqual([
      'array',
      'bigInt',
      'boolean',
      'datetime',
      'float',
      'hexaDecimal',
      'json',
      'number',
      'string',
      'uuid',
    ]);
  });

  itShouldReturnFakerValue(datatype);
});
