import React from 'react';
import { render, screen } from 'utils/tests';
import { Home } from './Home';

describe('Home', () => {
  it('should render with default props', () => {
    render(<Home />);

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
