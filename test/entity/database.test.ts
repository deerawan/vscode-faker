import { Database } from '../../src/entity/database';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Database Entity Tests', () => {
  const database = new Database();

  it('has name', () => {
    expect(database.getName()).toEqual('database');
  });

  it('has method', () => {
    expect(database.getMethods()).toEqual([
      'column',
      'type',
      'collation',
      'engine',
    ]);
  });

  itShouldReturnFakerValue(database);
});
