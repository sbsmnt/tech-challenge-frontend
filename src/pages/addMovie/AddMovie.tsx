import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'antd';
import { MovieForm } from 'containers/Movies/movieForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { genresActions } from 'store/genres.slice';
import { actorsActions } from 'store/actors.slice';
import classes from './AddMovie.module.scss';

export const AddMovie = () => {
  const { actors } = useSelector((state: RootState) => state.actors);
  const { genres } = useSelector((state: RootState) => state.genres);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(actorsActions.getAll());
    dispatch(genresActions.getAll());
  }, [dispatch]);

  return (
    <div className={classes.root}>
      <Row gutter={16}>
        <div>
          <Link to="/movies">Go Back</Link>
        </div>
      </Row>
      <h1>Add a New Movie</h1>
      <Row gutter={16} className={classes.formWrap}>
        <MovieForm actors={actors} genres={genres} />
      </Row>
    </div>
  );
};
