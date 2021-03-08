import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Genre } from 'api/genres';

interface GenresState {
  genres: Genre[]
}

const initialState: GenresState = {
  genres: [],
};

const slice = createSlice({
  name: 'genres',
  initialState,
  reducers: {
    getGenres: (state) => state,
    getGenresSuccess: (state, action: PayloadAction<Genre[]>) => {
      const { payload: genres } = action;
      return { ...state, genres };
    },
    getGenresError: (state, action: PayloadAction<Error>) => state,
  },
});

export const genresActions = { ...slice.actions };
export default slice.reducer;
