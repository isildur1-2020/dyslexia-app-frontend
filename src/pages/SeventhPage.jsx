import React from "react";
import { useSelector } from "react-redux";
import { QuestionList } from "../components/QuestionList/QuestionList";

export const SeventhPage = () => {
  const mainState = useSelector((s) => s?.mainState);
  const { currentLanguaje } = mainState;
  const { title6, list6, borderColor } = currentLanguaje;
  return (
    <QuestionList
      clockID={7}
      list={list6}
      title={title6}
      borderColor={borderColor}
      backgroundColor="#FF1C20"
      fontSize="body1"
      textStyle={{
        fontWeight: 300,
        fontSize: 24,
      }}
    />
  );
};