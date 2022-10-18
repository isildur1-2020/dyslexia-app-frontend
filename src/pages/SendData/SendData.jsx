import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACK_URL } from "../../axios/axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import {
  setEmailSended,
  clearRecordInfo,
  setScreenRecordLink,
  setCameraRecordLink,
  setScreenRecordSended,
  setCameraRecordSended,
} from "../../redux/actions/sendData";
import { sendData, sendEmailData } from "../../services/sendDataService";
import { Page } from "./Page";

export const SendData = ({
  stopRecordingVideo,
  stopRecordingScreen,
  mediaBlobUrlVideo,
  mediaBlobUrlScreen,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formState = useSelector((s) => s?.userForm);
  const sendDataState = useSelector((s) => s?.sendDataState);
  const { isCameraRecordSend, isScreenRecordSend, isEmailSend } = sendDataState;

  useEffect(() => {
    if (!isEmailSend) return;
    dispatch(clearRecordInfo());
    navigate("/form");
  }, [isEmailSend]);

  // SEND EMAIL
  useEffect(() => {
    if (!isCameraRecordSend || !isScreenRecordSend) return;
    const { cameraRecordLink, screenRecordLink } = sendDataState;
    sendEmailData({
      userData: formState,
      videoLink: cameraRecordLink,
      screenLink: screenRecordLink,
    });
    dispatch(setEmailSended());
  }, [isCameraRecordSend, isScreenRecordSend]);

  // SEND CAMERA RECORD
  useEffect(() => {
    if (!mediaBlobUrlVideo) return;
    if (isCameraRecordSend) return;
    const sendRecord = async () => {
      const { data } = await sendData(mediaBlobUrlVideo);
      dispatch(setCameraRecordSended());
      dispatch(setCameraRecordLink(BACK_URL + data?.URL));
    };
    sendRecord();
  }, [mediaBlobUrlVideo]);

  // SEND SCREEN RECORD
  useEffect(() => {
    if (!mediaBlobUrlScreen) return;
    if (isScreenRecordSend) return;
    const sendRecord = async () => {
      const { data } = await sendData(mediaBlobUrlScreen);
      dispatch(setScreenRecordSended());
      dispatch(setScreenRecordLink(BACK_URL + data?.URL));
    };
    sendRecord();
  }, [mediaBlobUrlScreen]);

  // STOP RECORDING
  useEffect(() => {
    stopRecordingVideo();
    stopRecordingScreen();
  }, []);

  return <Page />;
};
