const chai = require('chai');
import { Git } from '../../src/entity/git';

const expect = chai.expect;

describe('Git Entity Tests', () => {
  let git;

  before(function () {
    git = new Git();
  });

  it('has name', () => {
    expect(git.getName()).to.equal('git');
  });

  it('has method', () => {
    expect(git.getMethods()).to.eql([
      'branch',
      'commitEntry',
      'commitMessage',
      'commitSha',
      'shortSha',
    ]);
  });
});
