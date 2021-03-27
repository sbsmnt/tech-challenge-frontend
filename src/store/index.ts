import { configureStore } from '@reduxjs/toolkit';
import { homePageSaga } from 'pages/home';
import { moviesPageSaga } from 'pages/movies';
import { actorsPageSaga } from 'pages/actors';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import genresReducer from './genres.slice';
import actorsReducer from './actors.slice';
import moviesReducer from './movies.slice';

const sagas = [
  homePageSaga,
  moviesPageSaga,
  actorsPageSaga,
];

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    genres: genresReducer,
    movies: moviesReducer,
    actors: actorsReducer,
  },
  middleware: [
    sagaMiddleware,
  ],
});

sagas.forEach((saga) => sagaMiddleware.run(saga));

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
