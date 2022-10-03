import { types } from "../types/userForm";

export const setUserForm = (form) => ({
  type: types.SET_USER_FORM,
  form,
});
