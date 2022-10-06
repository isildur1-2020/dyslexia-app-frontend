import React from "react";
import { Page } from "./Page";
import { useNavigate } from "react-router-dom";
import { usePages } from "../../hooks/usePages";
import { useDispatch } from "react-redux";
import { setRemoveQuestion } from "../../redux/actions/main";

export const Buttons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isNextPage, currentPage } = usePages();

  const handleNext = () => dispatch(setRemoveQuestion(currentPage));

  const handleFinish = () => {
    dispatch(setRemoveQuestion(7));
    navigate("/sendData");
  };

  return (
    <Page
      finishText="Finish Exam"
      isNextPage={isNextPage}
      handlePrev={() => {}}
      handleNext={handleNext}
      handleFinish={handleFinish}
      isTheLastPage={currentPage === 7}
    />
  );
};
