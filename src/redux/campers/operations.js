import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampersThunk = createAsyncThunk(
  'fetchCampers',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('campers');
      return data.items;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

export const getCamperByIdThunk = createAsyncThunk(
  'getCamperById',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`campers/${id}`);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  },
);

// export const fetchCampersThunk = () => async dispatch => {
//   try {
//     dispatch(setErrorStatus(false));
//     dispatch(setIsLoadingStatus(true));
//     const response = await axios.get('campers');
//     dispatch(fetchCampers(response.data.items));
//   } catch (error) {
//     console.log(error);
//     dispatch(setErrorStatus(true));
//   } finally {
//     dispatch(setIsLoadingStatus(false));
//   }
// };

// export const getCamperByIdThunk = id => async dispatch => {
//   try {
//     dispatch(setErrorStatus(false));
//     dispatch(setIsLoadingStatus(true));
//     const response = await axios.get(`campers/${id}`);
//     dispatch(fetchCamperById(response.data));
//   } catch (error) {
//     console.log(error);
//     dispatch(setErrorStatus(true));
//   } finally {
//     dispatch(setIsLoadingStatus(false));
//   }
// };
