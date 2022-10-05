import {
  legacy_createStore as createStore,
  combineReducers,
} from "@reduxjs/toolkit";
import { formReducer } from "./reducers/main";
import { userFormReducer } from "./reducers/userForm";
import { clocksReducer } from "./reducers/clocks";

const reducers = combineReducers({
  formReducer,
  userForm: userFormReducer,
  clocks: clocksReducer,
});

export const store = createStore(reducers);
