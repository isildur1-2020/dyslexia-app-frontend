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
  const { isNextPage } = usePages();
  const { seconds, intervalId } = useSelector((s) => s?.clocks);
  const mainState = useSelector((s) => s?.mainState);
  const { questions, timePerQuestion } = mainState;

  // OBSERVER TO CHANGE PAGE
  useEffect(() => {
    const nextPage = questions?.[0];
    if (isNextPage) navigate(`/${nextPage}`);
  }, [questions]);

  // OBSERVER WHEN TIME IS ZERO
  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalId);
      dispatch(setIntervalId(null));
      dispatch(setRemoveQuestion(clockID));
      if (questions?.[0] === undefined) navigate(`/sendData`);
    }
  }, [seconds]);

  const setSeconds = () => dispatch(reduceClockSeconds());

  // ACTIVE CLOCK
  useEffect(() => {
    if (intervalId === null) {
      const id = setInterval(setSeconds, 1000);
      dispatch(setIntervalId(id));
    }
  }, [timePerQuestion]);

  // ALWAYS SET TOTAL SECONDS
  useEffect(() => {
    dispatch(setTotalSeconds(timePerQuestion));
    return () => {
      clearInterval(intervalId);
      dispatch(setIntervalId(null));
    };
  }, []);

  return <Page minutes={getMinutes(seconds)} seconds={getSeconds(seconds)} />;
};

Clock.propTypes = {
  clockID: PropTypes.number,
};
