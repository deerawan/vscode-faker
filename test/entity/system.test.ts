const chai = require('chai');
import { System } from '../../src/entity/system';

const expect = chai.expect;

describe('system Entity Tests', () => {
  let system;

  before(function() {
    system = new System();
  });

  it('has name', () => {
    expect(system.getName()).to.equal('system');
  });

  it('has method', () => {
    expect(system.getMethods()).to.eql([
      'fileName',
      'commonFileName',
      'mimeType',
      'commonFileType',
      'commonFileExt',
      'fileType',
      'fileExt',
      'directoryPath',
      'filePath',
      'semver',
    ]);
  });
});
