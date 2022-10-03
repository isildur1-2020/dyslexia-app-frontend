import { types } from "../types/main";

const initialState = {
  languaje: "",
  timePerQuestion: "",
  currentLanguaje: {},
  isAuth: false,
};

export const formReducer = (state = initialState, action) => {
  const { loginForm } = state;
  switch (action.type) {
    case types.SET_LANGUAJE:
      return {
        ...state,
        languaje: action.languaje,
      };
    case types.SET_TIME_PER_QUESTION:
      return {
        ...state,
        timePerQuestion: action.time,
      };
    case types.SET_CURRENT_LANGUAJE:
      return {
        ...state,
        currentLanguaje: action.lang,
      };
    case types.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action.isAuth,
      };
    default:
      return state;
  }
};
