import * as React from 'react';
import { shallow } from 'enzyme';
import { aBottle } from '../../../../../test/wine.factory';
import WineListRowDetails from '.';

describe('Wine List Row Body', () => {
  it('should render title with the name and correct color', () => {
    const bottles = [aBottle()];

    const component = shallow(<WineListRowDetails bottles={bottles}/>);

    expect(component.text()).toContain(2);
    expect(component.text()).toContain('2003');
    expect(component.text()).toContain('Bottle');
  });
});