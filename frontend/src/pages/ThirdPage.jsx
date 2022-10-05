import React from "react";
import { useSelector } from "react-redux";
import { CanvasClock } from "../components/CanvasClock/CanvasClock";
import { QuestionCanvas } from "../components/QuestionCanvas/QuestionCanvas";

export const ThirdPage = () => {
  const mainState = useSelector((s) => s?.formReducer);
  const { currentLanguaje } = mainState;
  const { title3, subtitle3 } = currentLanguaje;
  return (
    <QuestionCanvas
      clockID={3}
      title={title3}
      subtitle={subtitle3}
      Canvas={CanvasClock}
    />
  );
};
