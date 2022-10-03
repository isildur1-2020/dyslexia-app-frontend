import React, { useEffect, useRef, useContext } from "react";
import { MainContext } from "../../contexts/MainContext";
import { useNavigate } from "react-router-dom";
import { Page } from "./Page";

export const Logo = () => {
  const logoRef = useRef();
  const navigate = useNavigate();
  const { state, setState } = useContext(MainContext);
  const { questions } = state;
  const firstPage = !questions[0] ? "/sendData" : `/${questions[0]}`;
  const currentQuestion = questions[0] ?? null;

  const nextPage = () => {
    setState({
      ...state,
      currentQuestion,
    });
    navigate(firstPage);
  };

  const hiddenLogo = () => {
    logoRef.current.classList.remove("animate__fadeIn");
    logoRef.current.classList.add("animate__fadeOut");
    setTimeout(nextPage, 1000);
  };

  // to re direct on animation finished
  useEffect(() => {
    logoRef.current.classList.add("animate__fadeIn");
    setTimeout(hiddenLogo, 2000);
  }, []);

  return <Page ref={logoRef} />;
};
