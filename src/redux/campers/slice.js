import { createSlice } from '@reduxjs/toolkit';

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

    // increment: (state, action) => {
    //   state.campers += state.step;
    //   state.step += 1;
    // },
    // reset: (state, action) => {
    //   return initialState;
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
