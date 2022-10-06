import { types } from "../types/userForm";

const initialState = {
  name: "",
  age: "",
  dateOfBirth: "",
  nationality: "",
  bloodType: "",
  gender: "",
};

export const userFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_FORM:
      return {
        ...state,
        ...action.form,
      };
    default:
      return state;
  }
};
