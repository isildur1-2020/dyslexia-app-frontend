import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { Canvas } from "../components/Canvas/Canvas";
import { QuestionCanvas } from "../components/QuestionCanvas/QuestionCanvas";

export const FifthPage = () => {
  const { state } = useContext(MainContext);
  const { currentLanguaje } = state;
  const { title5, subtitle5 } = currentLanguaje;
  return <QuestionCanvas title={title5} subtitle={subtitle5} Canvas={Canvas} />;
};
