import React from "react";
import { useSelector } from "react-redux";
import { QuestionList } from "../components/QuestionList/QuestionList";

export const SixthPage = () => {
  const mainState = useSelector((s) => s?.mainState);
  const { currentLanguaje } = mainState;
  return (
    <QuestionList
      clockID={6}
      fontSize="body1"
      backgroundColor="#6FFB71"
      list={[currentLanguaje?.sixthQuestionText]}
      title={currentLanguaje?.sixthQuestionTitle}
      textStyle={{
        fontWeight: 300,
        fontSize: 24,
      }}
    />
  );
};
