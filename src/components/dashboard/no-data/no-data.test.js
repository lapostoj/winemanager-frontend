import * as React from 'react';
import { mount } from 'enzyme';
import NoData from '.';

describe('No Data', () => {
  it('should pass onDataAdded callback to UploadForm', () => {
    const onDataAdded = () => {};

    const component = mount(<NoData onDataAdded={onDataAdded} />);

    expect(component.find('UploadForm').props().onUpload).toEqual(onDataAdded);
  });
});