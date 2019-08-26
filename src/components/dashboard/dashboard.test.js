import * as React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { getBottlesForCellarId } from '../../clients/bottle-client';
import { aBottle } from '../../test/wine.factory';
import Dashboard from '.';
jest.mock('../../clients/bottle-client');

describe('Dashboard', () => {
  it('should display no data component if no wine is returned', async () => {
    getBottlesForCellarId.mockImplementation(() => Promise.resolve([]));

    let component;
    await act(async () => {
      component = mount(<Dashboard />);
    });

    expect(component.find('NoData')).toHaveLength(1);
    expect(component.find('WineList')).toHaveLength(0);
  });

  it('should display wine list component if some wines are returned', async () => {
    getBottlesForCellarId.mockImplementation(() =>
      Promise.resolve([aBottle()])
    );

    let component;
    await act(async () => {
      component = mount(<Dashboard />);
    });

    setImmediate(() => {
      component.update();
      expect(component.find('NoData')).toHaveLength(0);
      expect(component.find('WineList')).toHaveLength(1);
    });
  });
});
