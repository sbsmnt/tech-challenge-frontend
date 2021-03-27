import { Actor } from 'api/actors';
import axios, { AxiosResponse } from 'axios';
import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { actorsActions } from 'store/actors.slice';

function* fetchActors() {
  try {
    const getActorsRequest = () => axios.get<{ actors: Actor[] }>('/api/actors');
    const { data }: AxiosResponse<{ actors: Actor[] }> = yield call(getActorsRequest);

    yield put(actorsActions.getAllSuccess(data.actors));
  } catch (e) {
    yield put(actorsActions.getAllError(e));
  }
}

export function* actorsPageSaga() {
  yield takeLatest(actorsActions.getAll.type, fetchActors);
}
