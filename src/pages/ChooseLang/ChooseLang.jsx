import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Page } from "./Page";

export const ChooseLang = () => {
  const navigate = useNavigate();
  const state = useSelector((s) => s?.mainState);

  const handleClick = () => {
    const { languaje } = state;
    if (languaje === "") return;
    navigate("/login");
  };

  return <Page state={state} handleClick={handleClick} />;
};
