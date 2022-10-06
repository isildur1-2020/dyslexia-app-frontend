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
  const clockState = useSelector((s) => s?.clocks);
  const mainState = useSelector((s) => s?.mainState);
  const { seconds, intervalId } = clockState;
  const { questions, timePerQuestion } = mainState;

  // OBSERVER TO CHANGE PAGE
  useEffect(() => {
    const nextPage = questions?.[0];
    if (isNextPage) navigate(`/${nextPage}`);
    if (nextPage === undefined) navigate(`/sendData`);
  }, [questions]);

  // OBSERVER WHEN TIME IS ZERO
  useEffect(() => {
    if (seconds == 0) {
      console.log("TIME EQUAL TO ZERO");
      clearInterval(intervalId);
      dispatch(setRemoveQuestion(clockID));
    }
  }, [seconds]);

  const setSeconds = () => dispatch(reduceClockSeconds());

  // ACTIVE CLOCK
  useEffect(() => {
    console.log("ACTIVING...");
    if (intervalId === null) {
      console.log("INTERVAL NOT NULL");
      let id = setInterval(setSeconds, 1000);
      dispatch(setIntervalId(id));
    }
  }, [timePerQuestion]);

  // ALWAYS SET TOTAL SECONDS
  useEffect(() => {
    dispatch(setTotalSeconds(timePerQuestion));
    console.log("SET INIT SECONDS");
  }, []);

  return <Page minutes={getMinutes(seconds)} seconds={getSeconds(seconds)} />;
};

Clock.propTypes = {
  clockID: PropTypes.number,
};
