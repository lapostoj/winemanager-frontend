import * as React from 'react';
import { shallow } from 'enzyme';
import { createBottle } from '../../../../clients/bottle-client';
import AddBottleModal from '.';
jest.mock('../../../../clients/bottle-client');

describe('AddBottleModal', () => {
  it('should render with open', () => {
    const close = jest.fn();

    const component = shallow(<AddBottleModal open={true} close={close} />);

    expect(component.find('WithStyles(ForwardRef(Dialog))').prop('open')).toBe(
      true
    );
  });

  it('should render with not open', () => {
    const close = jest.fn();

    const component = shallow(<AddBottleModal open={false} close={close} />);

    expect(component.find('WithStyles(ForwardRef(Dialog))').prop('open')).toBe(
      false
    );
  });

  it('should pass close to onClose', () => {
    const close = jest.fn();

    const component = shallow(<AddBottleModal open={true} close={close} />);

    component.find('WithStyles(ForwardRef(Dialog))').prop('onClose')();
    expect(close).toHaveBeenCalled();
  });

  it('should pass close to cancel button', () => {
    const close = jest.fn();

    const component = shallow(<AddBottleModal open={true} close={close} />);

    component
      .find('WithStyles(ForwardRef(Button))')
      .get(0)
      .props.onClick();
    expect(close).toHaveBeenCalled();
  });

  it('should call close after adding bottle', async () => {
    const close = jest.fn();
    createBottle.mockImplementation(() => Promise.resolve());

    const component = shallow(<AddBottleModal open={true} close={close} />);

    await component
      .find('WithStyles(ForwardRef(Button))')
      .get(1)
      .props.onClick();
    expect(createBottle).toHaveBeenCalled();
    expect(close).toHaveBeenCalled();
  });
});
