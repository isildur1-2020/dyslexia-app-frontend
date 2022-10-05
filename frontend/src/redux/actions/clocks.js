import { types } from "../types/clocks";

export const setTotalSeconds = (seconds) => ({
  type: types.SET_TOTAL_SECONDS,
  seconds,
});

export const reduceClockSeconds = () => ({
  type: types.REDUCE_CLOCK_SECONDS,
});

export const setIntervalId = (id) => ({
  type: types.SET_INTERVAL_ID,
  id,
});
