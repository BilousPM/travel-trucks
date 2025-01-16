import { configureStore } from '@reduxjs/toolkit';
import { campersReducer } from './campers/reducer.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
  },
});
