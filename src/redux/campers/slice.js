import { createSlice } from '@reduxjs/toolkit';

import { fetchCampersThunk, getCamperByIdThunk } from './operations.js';

const initialState = {
  campers: [],
  selectedCamper: null,
  page: 1,
  selectedValue: '',
  isLoading: false,
  isError: false,
};

export const slice = createSlice({
  name: 'campers',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCampersThunk.fulfilled, (state, action) => {
        state.campers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCampersThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCamperByIdThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCamperByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCamper = action.payload;
        state.isError = false;
      })
      .addCase(getCamperByIdThunk.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
      });
  },
});

export const campersReducer = slice.reducer;
