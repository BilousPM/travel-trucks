import { configureStore } from '@reduxjs/toolkit';
import { camperReducer } from './reducer.js';

export const store = configureStore({
  reducer: camperReducer,
});
