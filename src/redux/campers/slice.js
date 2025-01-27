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
  reducers: {
    fetchCampers: (state, action) => {
      state.campers = action.payload;
    },
    fetchCamperById: (state, action) => {
      state.selectedCamper = action.payload;
    },
    setIsLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
    setErrorStatus: (state, action) => {
      state.isError = action.payload;
    },
    setPage: (state, action) => {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampersThunk.fulfilled, (state, action) => {
        state.campers = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCampersThunk.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCamperByIdThunk.fulfilled, (state, action) => {
        state.selectedCamper = action.payload;
      })
      .addCase(getCamperByIdThunk.pending, (state, action) => {
        state.isLoading = true;
      });
  },
});

export const campersReducer = slice.reducer;
export const {
  setIsLoadingStatus,
  setErrorStatus,
  fetchCampers,
  fetchCamperById,
  setPage,
} = slice.actions;
