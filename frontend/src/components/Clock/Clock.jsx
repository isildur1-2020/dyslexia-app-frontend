import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { usePages } from "../../hooks/usePages";
import { useDispatch, useSelector } from "react-redux";
import { setRemoveQuestion } from "../../redux/actions/main";
import { getMinutes, getSeconds } from "../../utils/clock";
import {
  setIntervalId,
  setTotalSeconds,
  reduceClockSeconds,
} from "../../redux/actions/clocks";
import { Page } from "./Page";

export const Clock = ({ clockID }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isNextPage, currentPage } = usePages();
  const clockState = useSelector((s) => s?.clocks);
  const mainState = useSelector((s) => s?.mainState);
  const { seconds, intervalId } = clockState;
  const { questions, timePerQuestion } = mainState;

  // // VERIFY IF THE PAGE IS ALLOWED
  // useEffect(() => {
  //   // const isAllowed = questions.some((q) => q === currentPage);
  //   // if (questions?.length === 0) return navigate("/sendData");
  //   // if (!isAllowed) return navigate(`/${questions[0]}`);
  //   console.log(questions);
  // }, []);

  // // OBSERVER TO CHANGE PAGE
  // useEffect(() => {
  //   if (isNextPage) navigate(`/${questions[0]}`);
  // }, [questions]);

  // // OBSERVER WHEN TIME IS ZERO
  // useEffect(() => {
  //   if (seconds == 0) {
  //     clearInterval(intervalId);
  //     dispatch(setRemoveQuestion(clockID));
  //   }
  // }, [seconds]);

  // const setSeconds = () => dispatch(reduceClockSeconds());

  // // ACTIVE CLOCK
  // useEffect(() => {
  //   if (intervalId === null) {
  //     let id = setInterval(setSeconds, 1000);
  //     dispatch(setIntervalId(id));
  //   }
  // }, [timePerQuestion]);

  // // ALWAYS SET TOTAL SECONDS
  // useEffect(() => {
  //   dispatch(setTotalSeconds(timePerQuestion));
  // }, []);

  return <Page minutes={getMinutes(seconds)} seconds={getSeconds(seconds)} />;
};

Clock.propTypes = {
  clockID: PropTypes.number,
};
