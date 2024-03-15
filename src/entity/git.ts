import { FakerEntity } from './faker-entity';

export class Git implements FakerEntity {
  public getName() {
    return 'git';
  }

  public getMethods() {
    return ['branch', 'commitEntry', 'commitMessage', 'commitSha'];
  }
}
