import * as React from 'react';
import { shallow } from 'enzyme';
import { aBottle } from '../../../../../test/wine.factory';
import WineListRowDetails from '.';

describe('Wine List Row Body', () => {
  it('should render title with the name and correct color', () => {
    const bottle = aBottle();

    const component = shallow(<WineListRowDetails bottle={bottle} />);

    expect(component.text()).toContain(3);
    expect(component.text()).toContain('Bottle');
    expect(component.text()).toContain('1963');
  });
});
