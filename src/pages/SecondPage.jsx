import React from "react";
import { useSelector } from "react-redux";
import { QuestionList } from "../components/QuestionList/QuestionList";

export const SecondPage = () => {
  const mainState = useSelector((s) => s?.mainState);
  const { currentLanguaje } = mainState;
  const {
    secondQuestionOption1,
    secondQuestionOption2,
    secondQuestionOption3,
    secondQuestionOption4,
    secondQuestionTitle,
    audioSecondQuestion,
  } = currentLanguaje;
  return (
    <QuestionList
      clockID={2}
      list={[
        secondQuestionOption1,
        secondQuestionOption2,
        secondQuestionOption3,
        secondQuestionOption4,
      ]}
      title={secondQuestionTitle}
      audioSrc={audioSecondQuestion}
    />
  );
};
