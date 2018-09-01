import * as React from 'react';
import { shallow } from 'enzyme';
import { aWine } from '../../../test/wine.factory';
import WineList from '.';

describe('Wine List', () => {
  it('should render no row if the list in props is empty', () => {
    const wineList = [];

    const component = shallow(<WineList wines={wineList} />);

    expect(component.find('.wine-list')).toHaveLength(1);
    expect(component.find('.wine-row')).toHaveLength(0);
  });

  it('should render one row per item in the list in props', () => {
    const wineList = [
      aWine('RED'),
      aWine('WHITE'),
    ];

    const component = shallow(<WineList wines={wineList} />);

    expect(component.find('.wine-list')).toHaveLength(1);
    expect(component.find('.wine-row')).toHaveLength(2);
  });
});