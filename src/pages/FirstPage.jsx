import React, { useEffect } from "react";
import { jwtToString } from "../utils/jwt";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Canvas } from "../components/Canvas/Canvas";
import { RecordModal } from "../components/RecordModal";
import { setShowRecordModal, setHideRecordModal } from "../redux/actions/main";
import { QuestionCanvas } from "../components/QuestionCanvas/QuestionCanvas";

export const FirstPage = ({
  statusVideo,
  statusScreen,
  startRecordingVideo,
  startRecordingScreen,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentLanguaje } = useSelector((s) => s?.mainState);

  const handleStart = () => {
    if (statusVideo !== "recording") startRecordingVideo();
    if (statusScreen !== "recording") startRecordingScreen();
    dispatch(setHideRecordModal());
  };

  useEffect(() => {
    const currentTests = jwtToString(localStorage.getItem("token"));
    console.log(currentTests);
    if (currentTests?.tests <= 0) {
      alert("Insufficient tests");
      navigate("/");
      navigate(0);
      return;
    }
    if (statusVideo !== "recording" && statusScreen !== "recording")
      dispatch(setShowRecordModal());
  }, []);

  return (
    <>
      <RecordModal
        handleStart={handleStart}
        title={currentLanguaje?.recordPopupLabel}
        cancelText={currentLanguaje?.recordPopupCancelLabel}
        startText={currentLanguaje?.recordPopupStartLabel}
      />
      <QuestionCanvas
        clockID={1}
        Canvas={Canvas}
        title={currentLanguaje?.firstQuestionTitle}
        audioSrc={currentLanguaje?.audioFirstQuestion}
        subtitle={currentLanguaje?.firstQuestionSubtitle}
      />
    </>
  );
};
