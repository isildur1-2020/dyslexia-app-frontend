import { types } from "../types/sendData";

const initialState = {
  isCameraRecordSend: false,
  isScreenRecordSend: false,
  cameraRecordLink: null,
  screenRecordLink: null,
  isEmailSend: false,
};

export const sendDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CAMERA_RECORD_SENDED:
      return {
        ...state,
        isCameraRecordSend: true,
      };
    case types.SET_SCREEN_RECORD_SENDED:
      return {
        ...state,
        isScreenRecordSend: true,
      };
    case types.SET_CAMERA_RECORD_LINK:
      return {
        ...state,
        cameraRecordLink: action?.link,
      };
    case types.SET_SCREEN_RECORD_LINK:
      return {
        ...state,
        screenRecordLink: action?.link,
      };
    case types.SET_EMAIL_SENDED:
      return {
        ...state,
        isEmailSend: true,
      };
    case types.CLEAR_RECORD_INFO:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
