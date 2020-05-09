import * as React from 'react';
import { mount } from 'enzyme';
import { uploadFile } from '../../../../clients/wine-client';
import UploadForm from '.';
jest.mock('../../../../clients/wine-client');

describe('Upload Form', () => {
  it('should upload and call callback if file is selected and confirmed', () => {
    const onUpload = jest.fn();
    const wines = [
      {
        name: 'name',
        color: 'RED',
      },
    ];
    uploadFile.mockImplementation(() => Promise.resolve(wines));
    const file = new File(['filecontent'], 'filename.csv');

    const component = mount(<UploadForm onUpload={onUpload} />);
    expect(component.find('#input-file-wines')).toHaveLength(1);
    expect(
      component.find('#button-select-file > .MuiButton-label')
    ).toHaveLength(1);

    inputFile(component, file);
    setImmediate(() => {
      expect(component.find('#input-file-wines')).toHaveLength(0);
      expect(
        component.find('#button-select-file > .MuiButton-label')
      ).toHaveLength(0);
      expect(component.find('#filename > p').text()).toEqual(
        expect.stringContaining('filename.csv')
      );
    });

    clickButton(component, '#button-confirm-file > button');
    expect(uploadFile).toHaveBeenCalled();
    setImmediate(() => expect(onUpload).toHaveBeenCalledWith(wines));
    uploadFile.mockReset();
  });

  it('should be able to delete file before confirming', () => {
    const onUpload = jest.fn();
    const wines = [
      {
        name: 'name',
        color: 'RED',
      },
    ];
    uploadFile.mockImplementation(() => Promise.resolve(wines));
    const file = new File(['filecontent'], 'filename.csv');

    const component = mount(<UploadForm onUpload={onUpload} />);
    expect(component.find('#input-file-wines')).toHaveLength(1);
    expect(
      component.find('#button-select-file > .MuiButton-label')
    ).toHaveLength(1);

    inputFile(component, file);
    expect(component.find('#input-file-wines')).toHaveLength(0);

    clickButton(component, '#button-delete-file > button');
    expect(component.find('#input-file-wines')).toHaveLength(1);
    expect(uploadFile).not.toHaveBeenCalled();
    expect(onUpload).not.toHaveBeenCalled();
    uploadFile.mockReset();
  });
});

function inputFile(component, file) {
  component.find('input').simulate('change', {
    target: {
      files: [file],
    },
  });
}

function clickButton(component, selector) {
  component.find(selector).simulate('click');
}
