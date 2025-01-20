import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  campers: 2,
  step: 1,
};

export const slice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.campers += state.step;
      state.step += 1;
    },
    reset: (state, action) => {
      return initialState;
    },
  },
});

export const campersReducer = slice.reducer;
export const { increment, reset } = slice.actions;
