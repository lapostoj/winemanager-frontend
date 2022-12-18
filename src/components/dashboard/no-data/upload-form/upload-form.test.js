import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { uploadFile } from '../../../../clients/wine-client';
import UploadForm from '.';
jest.mock('../../../../clients/wine-client');

test('uploads and call callback if file is selected and confirmed', async () => {
  const onUpload = jest.fn();
  const wines = [
    {
      name: 'name',
      color: 'RED',
    },
  ];
  uploadFile.mockImplementation(() => Promise.resolve(wines));
  const file = new File(['filecontent'], 'filename.csv');

  render(<UploadForm onUpload={onUpload} />);
  expect(screen.getByText('Choisir un fichier')).toBeVisible();

  await userEvent.upload(screen.getByLabelText('Choisir un fichier'), file);
  expect(screen.queryByLabelText('Choisir un fichier')).toBeNull();
  expect(screen.getByText('Confirmer')).toBeVisible();

  await userEvent.click(screen.getByText('Confirmer').closest('button'));
  expect(uploadFile).toHaveBeenCalled();
  await waitFor(() => expect(onUpload).toHaveBeenCalledWith(wines));
  uploadFile.mockReset();
});

test('is able to delete file before confirming', async () => {
  const onUpload = jest.fn();
  const wines = [
    {
      name: 'name',
      color: 'RED',
    },
  ];
  uploadFile.mockImplementation(() => Promise.resolve(wines));
  const file = new File(['filecontent'], 'filename.csv');

  render(<UploadForm onUpload={onUpload} />);
  expect(screen.getByText('Choisir un fichier')).toBeVisible();

  await userEvent.upload(screen.getByLabelText('Choisir un fichier'), file);
  expect(screen.queryByLabelText('Choisir un fichier')).toBeNull();
  expect(screen.getByText('Confirmer')).toBeVisible();

  await userEvent.click(screen.getByLabelText('delete'));
  expect(screen.getByText('Choisir un fichier')).toBeVisible();
  expect(uploadFile).not.toHaveBeenCalled();
  expect(onUpload).not.toHaveBeenCalled();
  uploadFile.mockReset();
});
