import { addCampers } from './constants.js';

const inialState = {
  campers: [],
};

export const camperReducer = (state = inialState, action) => {
  switch (action.type) {
    case addCampers:
      return { ...state, campers: state.campers };
    default:
      return state;
  }
};
