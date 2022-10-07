import { types } from "../types/user";

const initialState = {
  isAuth: false,
  isAdmin: null,
  username: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_IS_AUTH:
      return {
        ...state,
        isAuth: action?.isAuth,
      };
    case types.SET_IS_ADMIN:
      return {
        ...state,
        isAdmin: action?.isAdmin,
      };
    case types.SET_USERNAME:
      return {
        ...state,
        username: action?.username,
      };
    default:
      return state;
  }
};
