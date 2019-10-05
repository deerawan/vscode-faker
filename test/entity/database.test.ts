const chai = require('chai');
import { Database } from '../../src/entity/database';

const expect = chai.expect;

describe('Database Entity Tests', () => {
  let database;

  before(function() {
    database = new Database();
  });

  it('has name', () => {
    expect(database.getName()).to.equal('database');
  });

  it('has method', () => {
    expect(database.getMethods()).to.eql([
      'column',
      'type',
      'collation',
      'engine',
    ]);
  });
});
