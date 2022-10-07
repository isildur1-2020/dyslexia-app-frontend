import { types } from "../types/user";

export const setIsAuth = (isAuth) => ({
  type: types.SET_IS_AUTH,
  isAuth,
});

export const setIsAdmin = (isAdmin) => ({
  type: types.SET_IS_ADMIN,
  isAdmin,
});

export const setUsername = (username) => ({
  type: types.SET_USERNAME,
  username,
});
