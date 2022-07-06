import React, { useEffect, useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { Canvas } from "../components/Canvas/Canvas";
import { QuestionCanvas } from "../components/QuestionCanvas/QuestionCanvas";

export const FirstPage = ({
  statusVideo,
  statusScreen,
  startRecordingVideo,
  startRecordingScreen,
}) => {
  const { state } = useContext(MainContext);
  const { currentLanguaje } = state;
  const { title1, subtitle1 } = currentLanguaje;

  useEffect(() => {
    if (statusVideo !== "recording") startRecordingVideo();
    if (statusScreen !== "recording") startRecordingScreen();
  }, []);

  return (
    <QuestionCanvas
      clockID={1}
      title={title1}
      Canvas={Canvas}
      subtitle={subtitle1}
    />
  );
};
