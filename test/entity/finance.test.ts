import { Finance } from '../../src/entity/finance';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Finance Entity Tests', () => {
  const finance = new Finance();

  it('has name', () => {
    expect(finance.getName()).toEqual('finance');
  });

  it('has method', () => {
    expect(finance.getMethods()).toEqual([
      'accountNumber',
      'accountName',
      'routingNumber',
      'maskedNumber',
      'amount',
      'transactionType',
      'currencyCode',
      'currencyName',
      'currencySymbol',
      'bitcoinAddress',
      'litecoinAddress',
      'creditCardNumber',
      'creditCardCVV',
      'ethereumAddress',
      'iban',
      'bic',
      'transactionDescription',
    ]);
  });

  itShouldReturnFakerValue(finance);
});
