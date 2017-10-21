import { FakerEntity } from './faker-entity';

export class Finance implements FakerEntity {
  public getName() {
    return 'finance';
  }

  public getMethods() {
    return [
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
      'bic',
    ];
  }
}
