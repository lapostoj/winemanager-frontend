import * as React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createBottle } from '../../../../clients/bottle-client';
import AddBottleModal from '.';
jest.mock('../../../../clients/bottle-client');

test('renders visible when open is true', () => {
  const close = jest.fn();

  render(<AddBottleModal open={true} close={close} />);

  expect(screen.getAllByRole('presentation').length).toBe(2);
});

test('renders not visible when open is false', () => {
  const close = jest.fn();

  render(<AddBottleModal open={false} close={close} />);

  expect(screen.queryByRole('presentation')).toBeNull();
});

test('passes close to onClose', async () => {
  const close = jest.fn();

  render(<AddBottleModal open={true} close={close} />);
  await userEvent.click(screen.getAllByRole('presentation')[1]);

  expect(close).toHaveBeenCalled();
});

test('passes close to cancel button', async () => {
  const close = jest.fn();

  render(<AddBottleModal open={true} close={close} />);

  await userEvent.click(screen.getByText('Annuler').closest('button'));

  expect(close).toHaveBeenCalled();
});

test('calls close after adding bottle', async () => {
  const close = jest.fn();
  createBottle.mockImplementation(() => Promise.resolve());

  render(<AddBottleModal open={true} close={close} />);
  await userEvent.click(screen.getByText('Ajouter').closest('button'));

  expect(createBottle).toHaveBeenCalled();
  await waitFor(() => expect(close).toHaveBeenCalled());
});
