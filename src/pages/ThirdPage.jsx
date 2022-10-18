import React from "react";
import { useSelector } from "react-redux";
import { CanvasClock } from "../components/CanvasClock/CanvasClock";
import { QuestionCanvas } from "../components/QuestionCanvas/QuestionCanvas";

export const ThirdPage = () => {
  const mainState = useSelector((s) => s?.mainState);
  const { currentLanguaje } = mainState;
  return (
    <QuestionCanvas
      clockID={3}
      Canvas={CanvasClock}
      title={currentLanguaje?.thirdQuestionTitle}
      subtitle={currentLanguaje?.thirdQuestionSubtitle}
    />
  );
};
