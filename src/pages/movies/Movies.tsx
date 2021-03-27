import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { moviesActions } from 'store/movies.slice';
import {
  Col,
  Row,
  Spin,
} from 'antd';
import { Movie } from 'api/movies';
import { starredMovies } from 'utils/filters';
import { MovieFilters } from 'containers/Movies/movieFilters';
import { MovieCard } from 'containers/Movies/movieCard';
import classes from './Movies.module.scss';

export const Movies = () => {
  const [actorFilter, setActorFilter] = useState<string>('all');
  const { movies } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesActions.getAll());
  }, [dispatch]);

  const filterByActor = (value: string) => {
    const actorId = value;
    setActorFilter(actorId);
  };

  const filteredMovies = actorFilter !== 'all'
    ? starredMovies(movies, actorFilter)
    : movies;

  return (
    <div className={classes.root}>
      <h1>Movies</h1>
      <Link to="/movies/add">Add New Movie</Link>
      {filteredMovies.length === 0 && (
        <div>
          <Spin data-testid="loading" />
        </div>
      )}

      {filteredMovies.length > 0 && (
        <Row gutter={16}>
          <div className={classes.root}>
            <MovieFilters filter={filterByActor} />

            <h3>{`Listing ${filteredMovies.length} movies`}</h3>

            <div className={classes.movieWrap}>
              <Row gutter={[16, 24]}>
                {filteredMovies.map((movie: Movie) => (
                  <Col key={movie.id} sm={24} md={8} lg={6} xl={6}>
                    <MovieCard movie={movie} />
                  </Col>
                ))}
              </Row>
            </div>

          </div>
        </Row>
      )}
    </div>
  );
};
