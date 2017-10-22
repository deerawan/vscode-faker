const chai = require('chai');
import { System } from '../../src/entity/system';

const expect = chai.expect;

suite('system Entity Tests', () => {
  let system;

  before(function() {
    system = new System();
  });

  test('has name', () => {
    expect(system.getName()).to.equal('system');
  });

  test('has method', () => {
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
