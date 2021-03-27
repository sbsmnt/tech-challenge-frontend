import React from 'react';
import { render, screen } from 'utils/tests';
import { Actors } from './Actors';

describe('Actors', () => {
  it('should render with default props', () => {
    render(<Actors />);

    expect(screen.getByText('Actors')).toBeInTheDocument();
  });

  it('should render loading', () => {
    render(<Actors />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });
});
