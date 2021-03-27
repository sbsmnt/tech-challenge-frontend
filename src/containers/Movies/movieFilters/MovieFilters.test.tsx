import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from 'utils/tests';
import { MovieFilters } from './MovieFilters';

describe('MovieFilters', () => {
  const mockFn = jest.fn();

  it('should render actor filter input', () => {
    render(<MovieFilters filter={mockFn} />);

    expect(screen.getByTestId('filter-actors')).toBeInTheDocument();
  });

  it('should change select input value', async () => {
    render(<MovieFilters filter={mockFn} />);

    const actorFilter = screen.getByTestId('filter-actors').firstElementChild as HTMLInputElement;
    fireEvent.mouseDown(actorFilter);
    await waitFor(() => {
      fireEvent.mouseDown(screen.getByText('All'));
      expect(screen.getByText('All')).toBeInTheDocument();
    });
  });
});
