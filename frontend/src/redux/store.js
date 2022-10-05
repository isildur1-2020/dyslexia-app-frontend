import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { formReducer } from "./reducers/main";
import { userFormReducer } from "./reducers/userForm";
import { clocksReducer } from "./reducers/clocks";

const reducer = combineReducers({
  mainState: formReducer,
  userForm: userFormReducer,
  clocks: clocksReducer,
});

export const store = configureStore({
  reducer,
  devTools: true,
});
