import React from "react";
import { useSelector } from "react-redux";
import { QuestionList } from "../components/QuestionList/QuestionList";

export const SeventhPage = () => {
  const mainState = useSelector((s) => s?.mainState);
  const { currentLanguaje } = mainState;
  return (
    <QuestionList
      clockID={7}
      backgroundColor="#F25252"
      list={[currentLanguaje?.seventhQuestionText]}
      title={currentLanguaje?.seventhQuestionTitle}
      audioSrc={currentLanguaje?.audioSeventhQuestion}
      fontSize="body1"
      textStyle={{
        fontWeight: 300,
        fontSize: 24,
      }}
    />
  );
};
