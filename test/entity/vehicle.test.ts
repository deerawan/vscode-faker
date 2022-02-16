import { Vehicle } from '../../src/entity/vehicle';
import { itShouldReturnFakerValue } from '../test-helper';

describe('Vehicle Entity Tests', () => {
  const vehicle = new Vehicle();

  it('has name', () => {
    expect(vehicle.getName()).toEqual('vehicle');
  });

  it('has method', () => {
    expect(vehicle.getMethods()).toEqual([
      'vehicle',
      'manufacturer',
      'model',
      'type',
      'fuel',
      'vin',
      'color',
      'vrm',
      'bicycle',
    ]);
  });

  itShouldReturnFakerValue(vehicle);
});
