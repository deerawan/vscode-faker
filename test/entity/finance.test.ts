const chai = require('chai');
import { Finance } from '../../src/entity/finance';

const expect = chai.expect;

suite("Finance Entity Tests", () => {
  let finance;

  before(function() {
    finance = new Finance();
  });

  test("has name", () => {
    expect(finance.getName()).to.equal('finance');
  });

  test("has method", () => {
    expect(finance.getMethods()).to.eql([
      'account',
      'accountName',
      'mask',
      'amount',
      'transactionType',
      'currencyCode',
      'currencyName',
      'currencySymbol',
      'bitcoinAddress',
      'iban',
      'bic'
    ]);
  });
});
