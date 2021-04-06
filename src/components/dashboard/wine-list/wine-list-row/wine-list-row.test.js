import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { aBottle } from '../../../../test/wine.factory';
import WineListRow from '.';

test('renders a collapsed row with the correct values', () => {
  const bottle = aBottle();

  render(<WineListRow bottle={bottle} />);

  expect(screen.getByText(bottle.wine.name)).toBeVisible();
  expect(screen.queryByText(`/${bottle.year}/`)).toBeNull();
});

test('extends the row when the title is clicked', () => {
  const bottle = aBottle();

  render(<WineListRow bottle={bottle} />);
  userEvent.click(screen.getByRole('button'));

  expect(screen.getByText(bottle.wine.name)).toBeVisible();
  expect(screen.getByText(/année/)).toBeVisible();
});
