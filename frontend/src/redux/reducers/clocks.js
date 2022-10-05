import { types } from "../types/clocks";

const initialState = {
  isActive: false,
  seconds: 0,
  intervalId: null,
};

export const clocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TOTAL_SECONDS:
      return {
        ...state,
        seconds: Number(action?.seconds),
      };
    case types.REDUCE_CLOCK_SECONDS:
      return {
        ...state,
        seconds: state?.seconds - 1,
      };
    case types.SET_INTERVAL_ID:
      return {
        ...state,
        intervalId: action?.id,
      };
    default:
      return state;
  }
};
