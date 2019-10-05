const chai = require('chai');
import { Internet } from '../../src/entity/internet';

const expect = chai.expect;

describe('internet Entity Tests', () => {
  let internet;

  before(function() {
    internet = new Internet();
  });

  it('has name', () => {
    expect(internet.getName()).to.equal('internet');
  });

  it('has method', () => {
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
