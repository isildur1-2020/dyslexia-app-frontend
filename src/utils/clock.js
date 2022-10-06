const ZERO = 0;

export const getMinutes = (totalSeconds) => {
  if (isNaN(totalSeconds)) return ZERO;
  const minutes = Math.floor(totalSeconds / 60);
  if (minutes < 0) return ZERO;
  return minutes;
};

export const getSeconds = (totalSeconds) => {
  if (isNaN(totalSeconds)) return ZERO;
  const seconds = totalSeconds % 60;
  if (seconds < 0) return ZERO;
  return seconds;
};
