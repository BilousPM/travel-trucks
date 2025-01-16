import { INCREMENT } from './constants.js';

const initialState = {
  campers: 2,
  step: 2,
};

export const campersReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        campers: state.campers + state.step,
        step: state.step + 1,
      };
    default:
      return state;
  }
};
