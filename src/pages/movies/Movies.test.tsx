import React from 'react';
import { render, screen } from 'utils/tests';
import { Movies } from './Movies';

describe('Movies', () => {
  it('should render with default props', () => {
    render(<Movies />);

    expect(screen.getByText('Movies')).toBeInTheDocument();
  });

  it('should render loading', () => {
    render(<Movies />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
