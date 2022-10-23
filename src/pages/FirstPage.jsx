import React, { useEffect } from "react";
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
  const dispatch = useDispatch();
  const { currentLanguaje } = useSelector((s) => s?.mainState);

  const handleStart = () => {
    if (statusVideo !== "recording") startRecordingVideo();
    if (statusScreen !== "recording") startRecordingScreen();
    dispatch(setHideRecordModal());
  };

  useEffect(() => {
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
