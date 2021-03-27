import { Genre } from 'api/genres';
import { Movie } from 'api/movies';
import axios, { AxiosResponse } from 'axios';
import {
  all,
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { genresActions } from 'store/genres.slice';
import { moviesActions } from 'store/movies.slice';

const groupByGenre = (movies: Movie[], genres: Genre[]) => genres.map(
  (genre: Genre) => {
    const genreName = genre.name;
    const genreMovies = movies.filter((movie: Movie) => movie.genres.find(
      (movieGenre: Genre) => movieGenre.id === genre.id,
    ));
    return { genreName, genreMovies };
  },
);

function* fetchGenres() {
  try {
    const getGenresRequest = () => axios.get<{ genres: Genre[] }>('/api/genres');
    const { data }: AxiosResponse<{ genres: Genre[] }> = yield call(getGenresRequest);

    yield put(genresActions.getAllSuccess(data.genres));
  } catch (e) {
    yield put(genresActions.getAllError(e));
  }
}

function* fetchMoviesByGenre() {
  try {
    const getGenresRequest = () => axios.get<{ genres: Genre[] }>('/api/genres');
    const getMoviesRequest = () => axios.get<{ movies: Movie[] }>('/api/movies');

    const [gen, mov]: Iterable<AxiosResponse<{ genres: Genre[]; movies: Movie[] }>> = yield all([
      call(getGenresRequest),
      call(getMoviesRequest),
    ]);
    const combinedData = groupByGenre(mov.data.movies, gen.data.genres);

    yield put(moviesActions.getAllByGenSuccess(combinedData));
  } catch (e) {
    yield put(moviesActions.getAllByGenError(e));
  }
}

export function* homePageSaga() {
  yield takeLatest(moviesActions.getAllByGenre.type, fetchMoviesByGenre);
  yield takeLatest(genresActions.getAll.type, fetchGenres);
}
