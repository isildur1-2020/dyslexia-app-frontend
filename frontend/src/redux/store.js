import {
  legacy_createStore as createStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { formReducer } from "./reducers/main";
import { userFormReducer } from "./reducers/userForm";

const reducers = combineReducers({
  formReducer,
  userForm: userFormReducer,
});

export const store = createStore(reducers);
