import { configureStore } from '@reduxjs/toolkit';
import { homePageSaga } from 'pages/home';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import genresReducer from './genres.slice';

const sagas = [
  homePageSaga,
];

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    genres: genresReducer,
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
