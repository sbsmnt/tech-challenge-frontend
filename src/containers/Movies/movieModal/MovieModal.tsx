import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { moviesActions } from 'store/movies.slice';
import { Col, Row, Modal } from 'antd';
import { Movie } from 'api/movies';
import { MovieCard } from 'containers/Movies/movieCard';
import { starredMovies } from 'utils/filters';

interface Props {
  isVisible: boolean;
  actorId: string;
  handleModal: (open: boolean, actorId: string) => void;
}

export const MovieModal = ({ isVisible, actorId, handleModal }: Props) => {
  const { movies } = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesActions.getAll());
  }, [dispatch]);

  const movieList = starredMovies(movies, actorId);

  return (
    <Modal
      width="80%"
      title="Starred Movies"
      centered
      visible={isVisible}
      onOk={() => handleModal(false, '')}
      onCancel={() => handleModal(false, '')}
    >
      <div>
        <Row gutter={[16, 24]}>
          {movieList.map((movie: Movie) => (
            <Col key={movie.id} span={4}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </div>
    </Modal>
  );
};
