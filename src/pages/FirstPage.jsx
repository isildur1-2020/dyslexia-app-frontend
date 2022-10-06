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
  const { title1, subtitle1 } = currentLanguaje;

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
      <RecordModal handleStart={handleStart} />
      <QuestionCanvas
        clockID={1}
        title={title1}
        Canvas={Canvas}
        subtitle={subtitle1}
      />
    </>
  );
};
