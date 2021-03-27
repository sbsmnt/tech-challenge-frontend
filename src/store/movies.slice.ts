import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie, MoviePayload } from 'api/movies';

interface MoviesByGen {
  genreName: string;
  genreMovies: Movie[];
}

interface MoviesState {
  movies: Movie[];
  moviesByGenre: MoviesByGen[];
  error: string | null;
  success: string | null;
}

const initialState: MoviesState = {
  movies: [],
  moviesByGenre: [],
  error: null,
  success: null,
};

const slice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getAll: (state) => state,
    getAllSuccess: (state, action: PayloadAction<Movie[]>) => {
      const { payload: movies } = action;
      return {
        ...state,
        movies,
        error: null,
        success: null,
      };
    },
    getAllError: (state, action: PayloadAction<Error>) => state,

    getAllByGenre: (state) => state,
    getAllByGenSuccess: (state, action: PayloadAction<MoviesByGen[]>) => {
      const { payload: moviesByGenre } = action;
      return {
        ...state,
        moviesByGenre,
        error: null,
        success: null,
      };
    },
    getAllByGenError: (state, action: PayloadAction<Error>) => state,

    create: (state, action: PayloadAction<MoviePayload>) => state,
    createSuccess: (state, action: PayloadAction<Movie>) => {
      const { payload: movie } = action;
      const movies = [...state.movies, movie];
      return {
        ...state,
        movies,
        error: null,
        success: 'New movie created!',
      };
    },
    createError: (state, action: PayloadAction<Error>) => {
      const error = 'Oops! We can\'t save this movie now.';
      return { ...state, error, success: null };
    },
  },
});

export const moviesActions = { ...slice.actions };
export default slice.reducer;
