import React from "react";
import { useSelector } from "react-redux";
import { Canvas } from "../components/Canvas/Canvas";
import { QuestionCanvas } from "../components/QuestionCanvas/QuestionCanvas";

export const FifthPage = () => {
  const mainState = useSelector((s) => s?.mainState);
  const { currentLanguaje } = mainState;
  return (
    <QuestionCanvas
      clockID={5}
      Canvas={Canvas}
      title={currentLanguaje?.fifthQuestionTitle}
      audioSrc={currentLanguaje?.audioFifthQuestion}
      subtitle={currentLanguaje?.fifthQuestionSubtitle}
    />
  );
};
