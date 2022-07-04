export const langsToUpper = (data) => {
  const languajes = Object.keys(data);
  const languajesToUpper = languajes.map((el) => el.toLocaleUpperCase());
  return languajesToUpper;
};
