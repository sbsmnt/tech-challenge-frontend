import React from 'react';
import { render, screen } from 'utils/tests';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('should render all the menus available', () => {
    render(<Sidebar />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Movies')).toBeInTheDocument();
    expect(screen.getByText('Actors')).toBeInTheDocument();
  });
});
