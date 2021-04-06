import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { getBottlesForCellarId } from '../../clients/bottle-client';
import { aBottle } from '../../test/wine.factory';
import Dashboard from '.';
jest.mock('../../clients/bottle-client');

test('displays no data component if no wine is returned', async () => {
  getBottlesForCellarId.mockImplementation(() => Promise.resolve([]));

  render(<Dashboard />);

  await waitFor(() => {
    expect(screen.getByText('Ajouter mes bouteilles')).toBeVisible();
    expect(screen.queryByText('Vos vins')).toBeNull();
  });
});

test('displays wine list component if some wines are returned', async () => {
  getBottlesForCellarId.mockImplementation(() => Promise.resolve([aBottle()]));

  render(<Dashboard />);

  await waitFor(() => {
    expect(screen.queryByText('Ajouter mes bouteilles')).toBeNull();
    expect(screen.getByText('Vos vins')).toBeVisible();
  });
});
