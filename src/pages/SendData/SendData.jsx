import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BACK_URL } from "../../axios/axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { updateTestService } from "../../services/adminService";
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

  const updateTest = async () => {
    const resp = await updateTestService();
    console.log(resp);
  };

  useEffect(() => {
    if (!isEmailSend) return;
    dispatch(clearRecordInfo());
    updateTest();
    navigate("/");
    navigate(0);
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
      const URL_VIDEO = `${BACK_URL}/api/static/videos/${data?.URL}`;
      dispatch(setCameraRecordSended());
      dispatch(setCameraRecordLink(URL_VIDEO));
    };
    sendRecord();
  }, [mediaBlobUrlVideo]);

  // SEND SCREEN RECORD
  useEffect(() => {
    if (!mediaBlobUrlScreen) return;
    if (isScreenRecordSend) return;
    const sendRecord = async () => {
      const { data } = await sendData(mediaBlobUrlScreen);
      const URL_VIDEO = `${BACK_URL}/api/static/videos/${data?.URL}`;
      dispatch(setScreenRecordSended());
      dispatch(setScreenRecordLink(URL_VIDEO));
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
