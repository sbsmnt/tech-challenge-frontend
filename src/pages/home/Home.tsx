import React from 'react';
import { useDispatch } from 'react-redux';
import { genresActions } from 'store/genres.slice';

export const Home = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(genresActions.getAll());
  }, [dispatch]);
  return (
    <div>
      Home
    </div>
  );
};
