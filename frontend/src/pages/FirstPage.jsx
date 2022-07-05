import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { Canvas } from "../components/Canvas/Canvas";
import { QuestionCanvas } from "../components/QuestionCanvas/QuestionCanvas";

export const FirstPage = () => {
  const { state } = useContext(MainContext);
  const { currentLanguaje } = state;
  const { title1, subtitle1 } = currentLanguaje;
  return <QuestionCanvas title={title1} subtitle={subtitle1} Canvas={Canvas} />;
};
