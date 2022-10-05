import React from "react";
import { useSelector } from "react-redux";
import { QuestionList } from "../components/QuestionList/QuestionList";

export const FourthPage = () => {
  const mainState = useSelector((s) => s?.formReducer);
  const { currentLanguaje } = mainState;
  const { title2, list2, borderColor } = currentLanguaje;
  return (
    <QuestionList
      clockID={4}
      list={list2}
      title={title2}
      borderColor={borderColor}
      backgroundColor="#83DDF7"
    />
  );
};
