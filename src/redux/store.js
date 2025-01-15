import { configureStore } from '@reduxjs/toolkit';
import { camperReducer } from './camper/reducer.js';

export const store = configureStore({
  reducer: {
    campers: camperReducer,
  },
});
