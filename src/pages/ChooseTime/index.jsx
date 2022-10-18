import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTotalSeconds } from "../../redux/actions/clocks";
import { setTimePerQuestion } from "../../redux/actions/main";
import { timeOptions } from "./data";
import { Page } from "./page";

export const ChooseTime = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const state = useSelector((s) => s?.mainState);

  const handleClick = () => {
    const { timePerQuestion } = state;
    if (timePerQuestion === "") return;
    navigate("/logo");
  };

  // redux actions
  const handleTimeChange = (ev) => {
    const seconds = ev?.target?.value;
    dispatch(setTotalSeconds(seconds));
    dispatch(setTimePerQuestion(seconds));
  };

  return (
    <Page
      state={state}
      timeOptions={timeOptions}
      handleClick={handleClick}
      handleTimeChange={handleTimeChange}
    />
  );
};
