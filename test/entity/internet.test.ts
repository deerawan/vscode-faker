import { Internet } from '../../src/entity/internet';
import { itShouldReturnFakerValue } from '../test-helper';

describe('internet Entity Tests', () => {
  const internet = new Internet();

  it('has name', () => {
    expect(internet.getName()).toEqual('internet');
  });

  it('has method', () => {
    expect(internet.getMethods()).toEqual([
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
      'ipv6',
      'userAgent',
      'color',
      'mac',
      'password',
    ]);
  });

  itShouldReturnFakerValue(internet);
});
