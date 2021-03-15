import { Genre } from 'api/genres';
import axios, { AxiosResponse } from 'axios';
import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { genresActions } from 'store/genres.slice';

function* fetchGenres() {
  try {
    const getGenresRequest = () => axios.get<{ genres: Genre[] }>('/api/genres');
    const { data }: AxiosResponse<{ genres: Genre[] }> = yield call(getGenresRequest);

    yield put(genresActions.getAllSuccess(data.genres));
  } catch (e) {
    yield put(genresActions.getAllError(e));
  }
}

export function* homePageSaga() {
  yield takeLatest(genresActions.getAll.type, fetchGenres);
}
