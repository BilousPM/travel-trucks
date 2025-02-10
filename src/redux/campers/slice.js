import { createSlice } from '@reduxjs/toolkit';

import { fetchCampersThunk, getCamperByIdThunk } from './operations.js';

const initialState = {
  campers: [],
  selectedCamper: null,
  page: 1,
  selectedValue: '',
  totalPages: null,
  isLoading: false,
  isError: false,
  feedbackRequest: false,
};

export const slice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    resetCampers: (state, action) => {
      state.campers = initialState.campers;
    },
    resetSelectedCamper: (state, action) => {
      state.selectedCamper = null;
    },
    setSelectedValue: (state, action) => {
      state.selectedValue = initialState.selectedValue;
      state.campers = initialState.campers;
      state.selectedValue = action.payload;
    },
    setPages: (state, action) => {
      state.page = action.payload;
    },
    loadMore: (state, action) => {
      state.page += 1;
    },
    setFeedbackRequest: (state, action) => {
      state.feedbackRequest = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampersThunk.fulfilled, (state, action) => {
        state.totalPages = +action.payload.total;
        state.campers = [...state.campers, ...action.payload.items];
        // state.isLoading = false;
      })
      .addCase(getCamperByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCamper = action.payload;
        state.isError = false;
      });
    // .addCase(fetchCampersThunk.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // .addCase(getCamperByIdThunk.pending, (state, action) => {
    //   state.isLoading = true;
    //   state.isError = false;
    //   state.selectedCamper = action.payload;
    // });

    // .addCase(getCamperByIdThunk.rejected, (state, action) => {
    //   state.isError = true;
    //   state.isLoading = false;
    // });
  },
});
export const {
  setSelectedValue,
  setPages,
  loadMore,
  resetCampers,
  setFeedbackRequest,
} = slice.actions;
export const campersReducer = slice.reducer;
