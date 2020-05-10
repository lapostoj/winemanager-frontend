import * as React from 'react';
import { shallow } from 'enzyme';
import { aBottle } from '../../../../../test/wine.factory';
import WineListRowDetails from '.';

describe('Wine List Row Body', () => {
  it('should correct details for the bottle', () => {
    const bottle = aBottle();

    const component = shallow(<WineListRowDetails bottle={bottle} />);

    expect(component.text()).toContain(3);
    expect(component.text()).toContain('bottles ');
    expect(component.text()).toContain('1963');
  });

  it('should handle pluralization', () => {
    const bottle = aBottle();
    bottle.quantity = 1;

    const component = shallow(<WineListRowDetails bottle={bottle} />);

    expect(component.text()).toContain(1);
    expect(component.text()).toContain('bottle ');
    expect(component.text()).toContain('1963');
  });
});
