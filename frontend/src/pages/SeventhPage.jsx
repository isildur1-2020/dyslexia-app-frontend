import React, { useContext } from "react";
import { MainContext } from "../contexts/MainContext";
import { QuestionList } from "../components/QuestionList/QuestionList";

export const SeventhPage = () => {
  const { state } = useContext(MainContext);
  const { currentLanguaje } = state;
  const { title6, list6, borderColor } = currentLanguaje;
  return (
    <QuestionList
      title={title6}
      list={list6}
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
