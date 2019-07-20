import * as React from 'react';
import { mount } from 'enzyme';
import { aWine } from '../../../../test/wine.factory';
import WineListRow from '.';

describe('Wine List Row', () => {
  it('should render a collapsed row with the correct values', () => {
    const wine = aWine();

    const component = mount(<WineListRow wine={wine} />);

    expect(component.html()).toContain(wine.name);
    expect(component.html()).not.toContain(wine.bottles[0].year);
  });

  it('should extend the row when the title is clicked', () => {
    const wine = aWine();

    const component = mount(<WineListRow wine={wine} />);
    clickRow(component);

    expect(component.html()).toContain(wine.name);
    expect(component.html()).toContain(wine.bottles[0].year);
  });
});

function clickRow(component) {
  component.find('[role="button"]').simulate('click');
}
