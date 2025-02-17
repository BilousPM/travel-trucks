import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchCampersThunk = createAsyncThunk(
  'fetchCampers',
  async ({ page = 1, limit = 3, query }, thunkAPI) => {
    try {
      const { data } = await axios.get('campers', {
        params: { page, limit, ...query },
      });
      return data;
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
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
