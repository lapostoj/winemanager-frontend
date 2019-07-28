import * as React from 'react';
import { mount } from 'enzyme';
import { aBottle } from '../../../../test/wine.factory';
import WineListRow from '.';

describe('Wine List Row', () => {
  it('should render a collapsed row with the correct values', () => {
    const bottle = aBottle();

    const component = mount(<WineListRow bottle={bottle} />);

    expect(component.html()).toContain(bottle.wine.name);
    expect(component.html()).not.toContain(bottle.year);
  });

  it('should extend the row when the title is clicked', () => {
    const bottle = aBottle();

    const component = mount(<WineListRow bottle={bottle} />);
    clickRow(component);

    expect(component.html()).toContain(bottle.wine.name);
    expect(component.html()).toContain(bottle.year);
  });
});

function clickRow(component) {
  component.find('[role="button"]').simulate('click');
}
