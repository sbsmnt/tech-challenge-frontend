import React, { useEffect } from 'react';
import {
  Col,
  Row,
  Spin,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { moviesActions } from 'store/movies.slice';
import { Movie } from 'api/movies';
import { MovieCard } from 'containers/Movies/movieCard';

interface MoviesByGen {
  genreName: string;
  genreMovies: Movie[];
}

export const Home = () => {
  const { moviesByGenre } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesActions.getAllByGenre());
  }, [dispatch]);

  return (
    <div>
      <h1>Home</h1>

      {moviesByGenre.length === 0 && (
        <div>
          <Spin data-testid="loading" />
        </div>
      )}

      {moviesByGenre.map((group: MoviesByGen) => (
        <div key={group.genreName}>
          <Row gutter={16}>
            <h2>{group.genreName}</h2>
          </Row>
          <Row gutter={[16, 24]}>
            {group.genreMovies.map((movie: Movie) => (
              <Col key={movie.id} sm={24} md={8} lg={6} xl={6}>
                <MovieCard movie={movie} />
              </Col>
            ))}
          </Row>
        </div>
      ))}

    </div>
  );
};
