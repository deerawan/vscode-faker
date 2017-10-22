const chai = require('chai');
import { Internet } from '../../src/entity/internet';

const expect = chai.expect;

suite('internet Entity Tests', () => {
  let internet;

  before(function() {
    internet = new Internet();
  });

  test('has name', () => {
    expect(internet.getName()).to.equal('internet');
  });

  test('has method', () => {
    expect(internet.getMethods()).to.eql([
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
});
