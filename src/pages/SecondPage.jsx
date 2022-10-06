import React from "react";
import { useSelector } from "react-redux";
import { QuestionList } from "../components/QuestionList/QuestionList";

export const SecondPage = () => {
  const mainState = useSelector((s) => s?.mainState);
  const { currentLanguaje } = mainState;
  const { title2, list2, borderColor } = currentLanguaje;
  return (
    <QuestionList
      clockID={2}
      list={list2}
      title={title2}
      borderColor={borderColor}
    />
  );
};
