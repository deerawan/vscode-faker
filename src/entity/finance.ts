import { FakerEntity } from './faker-entity';

export class Finance implements FakerEntity {
  public getName() {
    return 'finance';
  }

  public getMethods() {
    return [
      'account',
      'accountName',
      'routingNumber',
      'mask',
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
