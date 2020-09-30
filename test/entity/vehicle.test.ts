const chai = require('chai');
import { Vehicle } from '../../src/entity/vehicle';

const expect = chai.expect;

describe('Vehicle Entity Tests', () => {
  let vehicle;

  before(function () {
    vehicle = new Vehicle();
  });

  it('has name', () => {
    expect(vehicle.getName()).to.equal('vehicle');
  });

  it('has method', () => {
    expect(vehicle.getMethods()).to.eql([
      'vehicle',
      'manufacturer',
      'model',
      'type',
      'fuel',
      'vin',
      'color',
    ]);
  });
});
