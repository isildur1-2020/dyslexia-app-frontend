import React from "react";
import { useSelector } from "react-redux";
import { Canvas } from "../components/Canvas/Canvas";
import { QuestionCanvas } from "../components/QuestionCanvas/QuestionCanvas";

export const FifthPage = () => {
  const mainState = useSelector((s) => s?.formReducer);
  const { currentLanguaje } = mainState;
  const { title5, subtitle5 } = currentLanguaje;
  return (
    <QuestionCanvas
      clockID={5}
      title={title5}
      Canvas={Canvas}
      subtitle={subtitle5}
    />
  );
};
