import { types } from "../types/main";

export const setLanguaje = (languaje) => ({
  type: types.SET_LANGUAJE,
  languaje,
});

export const setTimePerQuestion = (time) => ({
  type: types.SET_TIME_PER_QUESTION,
  time,
});

export const setCurrentLanguaje = (lang) => ({
  type: types.SET_CURRENT_LANGUAJE,
  lang,
});

export const setIsAuth = (isAuth) => ({
  type: types.SET_IS_AUTH,
  isAuth,
});
