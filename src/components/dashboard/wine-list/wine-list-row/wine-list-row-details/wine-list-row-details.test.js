import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { aBottle } from '../../../../../test/wine.factory';
import WineListRowDetails from '.';

test('displays correct details for the bottle', () => {
  const bottle = aBottle();

  render(<WineListRowDetails bottle={bottle} />);

  expect(screen.getByText("3 bottles de l'année 1963.")).toBeVisible();
});

test('handles pluralization', () => {
  const bottle = aBottle();
  bottle.quantity = 1;

  render(<WineListRowDetails bottle={bottle} />);

  expect(screen.getByText("1 bottle de l'année 1963.")).toBeVisible();
});
