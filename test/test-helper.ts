import { faker } from '@faker-js/faker';
import { FakerEntity } from '../src/entity';

export function itShouldReturnFakerValue(entity: FakerEntity) {
  describe('faker execution', () => {
    entity.getMethods().forEach((method) => {
      it(`should return value for ${method}`, () => {
        expect(faker[entity.getName()][method]()).toBeTruthy();
      });
    });
  });
}
