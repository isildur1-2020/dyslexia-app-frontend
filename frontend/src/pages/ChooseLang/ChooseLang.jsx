import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useIsMounted } from "../../hooks/useIsMounted";
import { languajes } from "../../languajes/languajes";
import { timeOptions } from "./data";
import { Page } from "./Page";
import {
  setLanguaje,
  setTimePerQuestion,
  setCurrentLanguaje,
} from "../../redux/actions/main";

export const ChooseLang = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isMounted } = useIsMounted();
  const [langs, setLangs] = useState([]);
  const state = useSelector((s) => s?.formReducer);

  const handleClick = () => {
    const { languaje, timePerQuestion } = state;
    if (languaje === "" || timePerQuestion === "") return;
    dispatch(setCurrentLanguaje(languajes?.[languaje]));
    navigate("/login");
  };

  // redux actions
  const handleLanguajeChange = ({ target }) =>
    dispatch(setLanguaje(target.value));
  const handleTimeChange = ({ target }) =>
    dispatch(setTimePerQuestion(target?.value));

  // To set lang options
  useEffect(() => {
    const langOptions = Object.keys(languajes);
    if (isMounted) setLangs(langOptions);
  }, []);

  return (
    <Page
      state={state}
      languajes={langs}
      handleClick={handleClick}
      timeOptions={timeOptions}
      handleTimeChange={handleTimeChange}
      handleLanguajeChange={handleLanguajeChange}
    />
  );
};
