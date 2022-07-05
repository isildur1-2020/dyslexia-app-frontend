import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { QuestionList } from "../components/QuestionList/QuestionList";

export const SecondPage = () => {
  const { state } = useContext(MainContext);
  const { currentLanguaje } = state;
  const { title2, list2, borderColor } = currentLanguaje;
  return <QuestionList title={title2} list={list2} borderColor={borderColor} />;
};
