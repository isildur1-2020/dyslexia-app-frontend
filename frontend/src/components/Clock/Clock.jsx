import PropTypes from "prop-types";
import React, { useEffect, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePages } from "../../hooks/usePages";
import { MainContext } from "../../contexts/MainContext";
import { ClocksContext } from "../../contexts/ClocksContext";
import { getMinutes, getSeconds } from "../../utils/clock";
import { Page } from "./Page";

export const Clock = ({ clockID }) => {
  let intervalID = useRef();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isPrevPage, isNextPage } = usePages();
  const { clocks, setClocks } = useContext(ClocksContext);
  const { state, setState } = useContext(MainContext);
  // CLOCK INFO
  const clockName = `clock${clockID}`;
  const currentClock = clocks[clockName];
  const { isActive, seconds } = currentClock;
  const { questions } = state;

  const setIsActive = (isActive) => {
    setClocks((prevState) => {
      const currentClock = prevState[clockName];
      return {
        ...prevState,
        [clockName]: {
          ...currentClock,
          isActive,
        },
      };
    });
  };

  const setSeconds = () => {
    setClocks((prevState) => {
      const currentClock = prevState[clockName];
      const { seconds } = currentClock;
      return {
        ...prevState,
        [clockName]: {
          ...currentClock,
          seconds: seconds - 1,
        },
      };
    });
  };

  const changePage = () => {
    const page = Number(pathname[1]);
    const prevPage = page - 1;
    const nextPage = page + 1;
    if (isNextPage) return navigate(`/${nextPage}`);
    if (isPrevPage) return navigate(`/${prevPage}`);
    navigate("/sendData");
  };

  useEffect(() => {
    if (seconds <= 0) {
      clearInterval(intervalID.current);
      const newQuestions = questions.filter((question) => question !== clockID);
      setState({
        ...state,
        questions: newQuestions,
      });
      changePage();
    }
  }, [seconds]);

  useEffect(() => {
    if (!isActive && !intervalID.current) {
      setIsActive(true);
      intervalID.current = setInterval(setSeconds, 1000);
    }
  }, []);

  return <Page minutes={getMinutes(seconds)} seconds={getSeconds(seconds)} />;
};

Clock.propTypes = {
  clockID: PropTypes.number,
};
