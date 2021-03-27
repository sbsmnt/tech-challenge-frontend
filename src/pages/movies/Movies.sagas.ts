import { PayloadAction } from '@reduxjs/toolkit';
import { Movie, MoviePayload } from 'api/movies';
import axios, { AxiosResponse } from 'axios';
import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { moviesActions } from 'store/movies.slice';

function* fetchMovies() {
  try {
    const getMoviesRequest = () => axios.get<{ movies: Movie[] }>('/api/movies');
    const { data }: AxiosResponse<{ movies: Movie[] }> = yield call(getMoviesRequest);

    yield put(moviesActions.getAllSuccess(data.movies));
  } catch (e) {
    yield put(moviesActions.getAllError(e));
  }
}

function* addMovie(action: PayloadAction<MoviePayload>) {
  try {
    const postMoviesRequest = () => axios.post<{ movie: MoviePayload }>('/api/movies', action.payload);
    const { data }: AxiosResponse<{ movie: Movie }> = yield call(postMoviesRequest);

    yield put(moviesActions.createSuccess(data.movie));
  } catch (e) {
    yield put(moviesActions.createError(e));
  }
}

export function* moviesPageSaga() {
  yield takeLatest(moviesActions.getAll.type, fetchMovies);
  yield takeLatest(moviesActions.create.type, addMovie);
}
