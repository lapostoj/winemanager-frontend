import * as React from 'react';
import { render, screen } from '@testing-library/react';
import NoData from '.';

test('displays UploadForm', async () => {
  const onDataAdded = jest.fn();

  render(<NoData onDataAdded={onDataAdded} />);

  expect(screen.getByText('Choisir un fichier')).toBeVisible();
});
