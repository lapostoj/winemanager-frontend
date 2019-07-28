import * as React from 'react';
import { shallow } from 'enzyme';
import { aBottle } from '../../../test/wine.factory';
import WineList from '.';

describe('Wine List', () => {
  it('should render no row if the list in props is empty', () => {
    const bottles = [];

    const component = shallow(<WineList bottles={bottles} />);

    expect(component.text()).toContain('Vos vins');
    expect(component.find('WineListRow')).toHaveLength(0);
  });

  it('should render one row per item in the list in props', () => {
    const bottles = [aBottle(), aBottle()];

    const component = shallow(<WineList bottles={bottles} />);

    expect(component.text()).toContain('Vos vins');
    expect(component.find('WineListRow')).toHaveLength(2);
  });

  it('should render with AddBottleModal closed', () => {
    const bottles = [];

    const component = shallow(<WineList bottles={bottles} />);

    expect(component.find('AddBottleModal').prop('open')).toBe(false);
  });

  it('should open AddBottleModal on button click', () => {
    const bottles = [];

    const component = shallow(<WineList bottles={bottles} />);
    component.find('WithStyles(ForwardRef(Button))').prop('onClick')();

    expect(component.find('AddBottleModal').prop('open')).toBe(true);
  });

  it('should update state with function passed to modal close', () => {
    const bottles = [];

    const component = shallow(<WineList bottles={bottles} />);
    component.find('WithStyles(ForwardRef(Button))').prop('onClick')();
    component.find('AddBottleModal').prop('close')();

    expect(component.find('AddBottleModal').prop('open')).toBe(false);
  });
});
