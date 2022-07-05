import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { CanvasClock } from "../components/CanvasClock/CanvasClock";
import { QuestionCanvas } from "../components/QuestionCanvas/QuestionCanvas";

export const ThirdPage = () => {
  const { state } = useContext(MainContext);
  const { currentLanguaje } = state;
  const { title3, subtitle3 } = currentLanguaje;
  return (
    <QuestionCanvas title={title3} subtitle={subtitle3} Canvas={CanvasClock} />
  );
};
