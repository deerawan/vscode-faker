import { FakerEntity } from './faker-entity';

export class Internet implements FakerEntity {
  public getName() {
    return 'internet';
  }

  public getMethods() {
    return [
      'avatar',
      'email',
      'exampleEmail',
      'userName',
      'protocol',
      'url',
      'domainName',
      'domainSuffix',
      'domainWord',
      'ip',
      'userAgent',
      'color',
      'mac',
      'password'
    ]
  }
}