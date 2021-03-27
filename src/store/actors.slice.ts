import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Actor } from 'api/actors';

interface ActorsState {
  actors: Actor[]
}

const initialState: ActorsState = {
  actors: [],
};

const slice = createSlice({
  name: 'actors',
  initialState,
  reducers: {
    getAll: (state) => state,
    getAllSuccess: (state, action: PayloadAction<Actor[]>) => {
      const { payload: actors } = action;
      return { ...state, actors };
    },
    getAllError: (state, action: PayloadAction<Error>) => state,
  },
});

export const actorsActions = { ...slice.actions };
export default slice.reducer;
