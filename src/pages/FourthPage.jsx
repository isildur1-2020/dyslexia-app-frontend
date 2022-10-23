import React from "react";
import { useSelector } from "react-redux";
import { QuestionList } from "../components/QuestionList/QuestionList";

export const FourthPage = () => {
  const mainState = useSelector((s) => s?.mainState);
  const { currentLanguaje } = mainState;
  const {
    fourthQuestionTitle,
    fourthQuestionOption1,
    fourthQuestionOption2,
    fourthQuestionOption3,
    fourthQuestionOption4,
    audioFourthQuestion,
  } = currentLanguaje;
  return (
    <QuestionList
      clockID={4}
      backgroundColor="#83DDF7"
      title={fourthQuestionTitle}
      audioSrc={audioFourthQuestion}
      list={[
        fourthQuestionOption1,
        fourthQuestionOption2,
        fourthQuestionOption3,
        fourthQuestionOption4,
      ]}
    />
  );
};
