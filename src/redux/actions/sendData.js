import { types } from "../types/sendData";

export const setCameraRecordSended = () => ({
  type: types.SET_CAMERA_RECORD_SENDED,
});

export const setScreenRecordSended = () => ({
  type: types.SET_SCREEN_RECORD_SENDED,
});

export const setCameraRecordLink = (link) => ({
  type: types.SET_CAMERA_RECORD_LINK,
  link,
});

export const setScreenRecordLink = (link) => ({
  type: types.SET_SCREEN_RECORD_LINK,
  link,
});

export const setEmailSended = () => ({
  type: types.SET_EMAIL_SENDED,
});

export const clearRecordInfo = () => ({
  type: types.CLEAR_RECORD_INFO,
});
