import { System } from '../../src/entity/system';
import { itShouldReturnFakerValue } from '../test-helper';

describe('system Entity Tests', () => {
  const system = new System();

  it('has name', () => {
    expect(system.getName()).toEqual('system');
  });

  it('has method', () => {
    expect(system.getMethods()).toEqual([
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

  itShouldReturnFakerValue(system);
});
