import * as React from 'react';
import { mount } from 'enzyme';
import { getWines } from '../../clients/wine-client';
jest.mock('../../clients/wine-client');
import Dashboard from '.';

describe('Dashboard', () => {
  it('should display no data component if no wine is returned', () => {
    getWines.mockImplementation(() => Promise.resolve([]));

    const component = mount(<Dashboard />);

    expect(component.find('NoData')).toHaveLength(1);
    expect(component.find('WineList')).toHaveLength(0);
  });

  it('should display wine list component if some wines are returned', () => {
    getWines.mockImplementation(() => Promise.resolve([
      {
        name: 'name',
        color: 'RED',
      },
    ]));

    const component = mount(<Dashboard />);

    setImmediate(() => {
      component.update();
      expect(component.find('NoData')).toHaveLength(0);
      expect(component.find('WineList')).toHaveLength(1);
    });
  });
});