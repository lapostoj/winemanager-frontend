import * as React from 'react';
import { mount } from 'enzyme';
import { uploadFile } from '../../../../clients/wine-client';
jest.mock('../../../../clients/wine-client');
import UploadForm from '.';

describe('Upload Form', () => {
  it('should not upload and not call callback if button is pressed without input', () => {
    const onUpload = jest.fn();
    uploadFile.mockImplementation(() => Promise.resolve());

    const component = mount(<UploadForm onUpload={onUpload} />);
    clickButton(component);

    expect(uploadFile).not.toHaveBeenCalled();
    expect(onUpload).not.toHaveBeenCalled();
  });

  it('should upload and call callback if button is pressed after input', () => {
    const onUpload = jest.fn();
    const wines = [
      {
        name: 'name',
        color: 'RED',
      },
    ];
    uploadFile.mockImplementation(() => Promise.resolve(wines));
    const file = new File(['filecontent'], 'filename.ext');
    const expectedDate = new FormData();
    expectedDate.append('file', file);

    const component = mount(<UploadForm onUpload={onUpload} />);
    component.find('input').simulate('change', {
      target: {
        files: [file]
      },
    });
    clickButton(component);

    expect(uploadFile).toHaveBeenCalled;
    setImmediate(() => {
      expect(onUpload).toHaveBeenCalledWith(wines);
    });
  });
});

function clickButton(component) {
  component.find('button').instance().click();
}
