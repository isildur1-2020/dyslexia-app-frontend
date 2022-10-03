import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MainContext } from "../../contexts/MainContext";
import { headers } from "../../utils/headers";
import logo from "../../assets/logo.png";
import styles from "./styles.module.scss";

const BACK_URL = "https://api.dyslexia-test.online";

export const SendData = ({
  stopRecordingVideo,
  stopRecordingScreen,
  mediaBlobUrlVideo,
  mediaBlobUrlScreen,
}) => {
  const navigate = useNavigate();
  const { state, setState } = useContext(MainContext);
  const [linkVideoRecord, setLinkVideoRecord] = useState("");
  const [linkScreenRecord, setLinkScreenRecord] = useState("");
  const [isLinkVideoSend, setIsLinkVideoSend] = useState(false);
  const [isEmailSend, setIsEmailSend] = useState(false);
  const [isLinkScreenSend, setIsLinkScreenSend] = useState(false);
  const { age, bloodType, dateOfBirth, gender, name, nationality } = state;

  const sendFullData = async (data) => {
    if (!name) return;
    await axios.post(BACK_URL + "/data", data, {
      headers,
    });
  };

  useEffect(() => {
    if (!isLinkVideoSend || !isLinkScreenSend) return;
    sendFullData({
      videoLink: BACK_URL + linkVideoRecord,
      screenLink: BACK_URL + linkScreenRecord,
      userData: { age, bloodType, dateOfBirth, gender, name, nationality },
    });
    setIsEmailSend(true);
  }, [isLinkVideoSend, isLinkScreenSend]);

  const convertURLToBlob = async (URL) => {
    try {
      const data = await fetch(URL);
      const blob = await data.blob();
      return blob;
    } catch (error) {
      console.log(error);
    }
  };

  const sendData = async (data) => {
    return await axios.post(BACK_URL + "/upload", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  useEffect(() => {
    if (!isEmailSend) return;
    setState({
      ...state,
      isUserAuth: false,
      name: "",
      age: "",
      dateOfBirth: "",
      nationality: "",
      bloodType: "",
      gender: null,
    });
    navigate("/form");
  }, [isEmailSend]);

  useEffect(() => {
    if (isLinkVideoSend) return;
    if (!mediaBlobUrlVideo) return;

    async function sendRecord() {
      try {
        const videoBlob = await convertURLToBlob(mediaBlobUrlVideo);
        const formData = new FormData();
        formData.append("record", videoBlob);
        const { data } = await sendData(formData);
        setLinkVideoRecord(data.URL);
        setIsLinkVideoSend(true);
      } catch (err) {
        console.log(err);
      }
    }
    sendRecord();
  }, [mediaBlobUrlVideo]);

  useEffect(() => {
    if (isLinkScreenSend) return;
    if (!mediaBlobUrlScreen) return;

    async function sendRecord() {
      const screenBlob = await convertURLToBlob(mediaBlobUrlScreen);
      const formData = new FormData();
      formData.append("record", screenBlob);
      const { data } = await sendData(formData);
      setLinkScreenRecord(data.URL);
      setIsLinkScreenSend(true);
    }
    sendRecord();
  }, [mediaBlobUrlScreen]);

  useEffect(() => {
    stopRecordingVideo();
    stopRecordingScreen();
  }, []);

  return (
    <div className={styles.SendData}>
      <img src={logo} alt="dyslexia-app" title="dyslexia-app" />
    </div>
  );
};
