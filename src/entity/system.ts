import { FakerEntity } from './faker-entity';

export class System implements FakerEntity {
  public getName() {
    return 'system';
  }

  public getMethods() {
    return [
      'fileName',
      'commonFileName',
      'mimeType',
      'commonFileType',
      'commonFileExt',
      'fileType',
      'fileExt',
      'directoryPath',
      'filePath',
      'semver'
    ]
  }
}