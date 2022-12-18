import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { aBottle } from '../../../test/wine.factory';
import WineList from '.';

const MODAL_TITLE = 'Entrer les détails de la bouteille à ajouter.';

test('renders no row if the list in props is empty', () => {
  const bottles = [];

  render(<WineList bottles={bottles} />);

  expect(screen.getByText('Vos vins')).toBeVisible();
  expect(screen.queryByText('Test Wine')).toBeNull();
});

test('renders one row per item in the list in props', () => {
  const bottles = [aBottle(), aBottle()];

  render(<WineList bottles={bottles} />);

  expect(screen.getByText('Vos vins')).toBeVisible();
  expect(screen.getAllByText('Test Wine')).toHaveLength(2);
});

test('renders with AddBottleModal closed', () => {
  const bottles = [];

  render(<WineList bottles={bottles} />);

  expect(screen.queryByText(MODAL_TITLE)).toBeNull();
});

test('opens AddBottleModal on button click', async () => {
  const bottles = [];

  render(<WineList bottles={bottles} />);
  await userEvent.click(
    screen.getByText('Ajouter une bouteille').closest('button')
  );

  expect(screen.getByText(MODAL_TITLE)).toBeVisible();
});

test('updates state with function passed to modal close', async () => {
  const bottles = [];

  render(<WineList bottles={bottles} />);
  await userEvent.click(
    screen.getByText('Ajouter une bouteille').closest('button')
  );
  await userEvent.click(screen.getByText('Annuler').closest('button'));

  expect(screen.queryByText(MODAL_TITLE)).not.toBeVisible();
});
