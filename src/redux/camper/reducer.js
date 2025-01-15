import { addCampers } from './constants.js';

const initialState = {
  campers: [1, 2, 3, 4, 5],
  step: 1,
};

export const camperReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
