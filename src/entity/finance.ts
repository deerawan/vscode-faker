import { FakerEntity } from './faker-entity';

export class Finance implements FakerEntity {
  public getName() {
    return 'finance';
  }

  public getMethods() {
    return [
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
    ];
  }
}
