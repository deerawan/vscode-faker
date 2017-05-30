const chai = require('chai');
import { Database } from '../../src/entity/database';

const expect = chai.expect;

suite("Database Entity Tests", () => {
  let database;

  before(function() {
    database = new Database();
  });

  test("has name", () => {
    expect(database.getName()).to.equal('database');
  });

  test("has method", () => {
    expect(database.getMethods()).to.eql([
      'column',
      'type',
      'collation',
      'engine'
    ]);
  });
});
