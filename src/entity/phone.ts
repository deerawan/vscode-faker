import { FakerEntity } from './faker-entity';

export class Phone implements FakerEntity {
  public getName() {
    return 'phone';
  }

  public getMethods() {
    return [
      'phoneNumber',
      'phoneNumberFormat',
      'phoneFormats'
    ]
  }
}