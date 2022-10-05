import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Canvas } from "../components/Canvas/Canvas";
import { QuestionCanvas } from "../components/QuestionCanvas/QuestionCanvas";

export const FirstPage = ({
  statusVideo,
  statusScreen,
  startRecordingVideo,
  startRecordingScreen,
}) => {
  const mainState = useSelector((s) => s?.formReducer);
  const { currentLanguaje } = mainState;
  const { title1, subtitle1 } = currentLanguaje;

  // useEffect(() => {
  //   if (statusVideo !== "recording") startRecordingVideo();
  //   if (statusScreen !== "recording") startRecordingScreen();
  // }, []);

  return (
    <QuestionCanvas
      clockID={1}
      title={title1}
      Canvas={Canvas}
      subtitle={subtitle1}
    />
  );
};
