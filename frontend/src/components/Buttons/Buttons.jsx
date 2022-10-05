import React from "react";
import { Page } from "./Page";
import { useNavigate } from "react-router-dom";
import { usePages } from "../../hooks/usePages";
import { useSelector, useDispatch } from "react-redux";
import { setRemoveQuestion } from "../../redux/actions/main";

export const Buttons = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isNextPage, currentPage } = usePages();
  const { intervalId } = useSelector((s) => s?.clocks);

  const handlePrev = () => {};

  const handleNext = () => {
    // clearInterval(intervalId);
    // dispatch(setRemoveQuestion(currentPage));
    navigate(`/${currentPage + 1}`);
  };

  const handleFinish = () => {
    dispatch(setRemoveQuestion(7));
    navigate("/sendData");
  };

  return (
    <Page
      finishText="Finish Exam"
      isNextPage={isNextPage}
      handlePrev={handlePrev}
      handleNext={handleNext}
      handleFinish={handleFinish}
      isTheLastPage={currentPage === 7}
    />
  );
};
