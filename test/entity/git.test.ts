import { Git } from '../../src/entity/git';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Git Entity Tests', () => {
  const git = new Git();

  it('has name', () => {
    expect(git.getName()).toEqual('git');
  });

  it('has method', () => {
    expect(git.getMethods()).toEqual([
      'branch',
      'commitEntry',
      'commitMessage',
      'commitSha',
    ]);
  });

  itShouldReturnFakerValue(git);
});
