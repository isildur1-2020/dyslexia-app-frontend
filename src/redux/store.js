import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { formReducer } from "./reducers/main";
import { userFormReducer } from "./reducers/userForm";
import { clocksReducer } from "./reducers/clocks";
import { sendDataReducer } from "./reducers/sendData";
import { userReducer } from "./reducers/user";

const reducer = combineReducers({
  mainState: formReducer,
  userForm: userFormReducer,
  clocks: clocksReducer,
  sendDataState: sendDataReducer,
  userState: userReducer,
});

export const store = configureStore({
  reducer,
  devTools: true,
});
