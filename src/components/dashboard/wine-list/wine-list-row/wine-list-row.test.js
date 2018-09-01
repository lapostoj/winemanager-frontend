import * as React from 'react';
import { shallow } from 'enzyme';
import { aWine } from '../../../../test/wine.factory';
import WineListRow from '.';

describe('Wine List Row', () => {
  it('should render a collapsed row with the correct values', () => {
    const wine = aWine();

    const component = shallow(<WineListRow wine={wine}/>);

    expect(component.find('.wine-row-title')).toHaveLength(1);
    expect(component.find('.wine-row-details')).toHaveLength(1);
    expect(component.find('.wine-row-details').props().in).toEqual(false);
    expect(component.html()).toContain(wine.name);
    expect(component.html()).not.toContain(wine.bottles[0].year);
  });

  it('should extend the row when the title is clicked', () => {
    const wine = aWine();

    const component = shallow(<WineListRow wine={wine}/>);
    clickRow(component);

    expect(component.find('.wine-row-title')).toHaveLength(1);
    expect(component.find('.wine-row-details')).toHaveLength(1);
    expect(component.find('.wine-row-details').props().in).toEqual(true);
    expect(component.html()).toContain(wine.name);
    expect(component.html()).toContain(wine.bottles[0].year);
  });

  it('should collapse an extended row when the title is clicked', () => {
    const wine = aWine();

    const component = shallow(<WineListRow wine={wine}/>);
    clickRow(component);
    clickRow(component);

    expect(component.find('.wine-row-title')).toHaveLength(1);
    expect(component.find('.wine-row-details')).toHaveLength(1);
    expect(component.find('.wine-row-details').props().in).toEqual(false);
    expect(component.html()).toContain(wine.name);
    expect(component.html()).not.toContain(wine.bottles[0].year);
  });
});

function clickRow(component) {
  component.find('.wine-row-title').simulate('click');
}