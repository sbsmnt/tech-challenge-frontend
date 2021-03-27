import React from 'react';
import { render, screen } from 'utils/tests';
import { mockMovies } from 'utils/testsMockData';
import { MovieCard } from './MovieCard';

describe('MovieCard', () => {
  it('should render with movie details', () => {
    const movie = mockMovies[0];
    render(<MovieCard movie={movie} />);

    const findTitle = new RegExp(movie.title, 'i');
    const findDirector = new RegExp(movie.director, 'i');
    const findYear = new RegExp(movie.year.toString(), 'i');
    const findRuntime = new RegExp(movie.runtime.toString(), 'i');

    expect(screen.getByText(findTitle)).toBeInTheDocument();
    expect(screen.getByText(findYear)).toBeInTheDocument();
    expect(screen.getByText(findRuntime)).toBeInTheDocument();
    expect(screen.getByText(findDirector)).toBeInTheDocument();
  });

  it('should render poster image', () => {
    const movie = mockMovies[0];
    render(<MovieCard movie={movie} />);

    expect(screen.getByAltText(movie.title)).toBeInTheDocument();
  });
});
