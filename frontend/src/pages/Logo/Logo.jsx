import { useNavigate } from "react-router-dom";
import React, { useEffect, useRef } from "react";
import { Page } from "./Page";

export const Logo = () => {
  const logoRef = useRef();
  const navigate = useNavigate();

  const nextPage = () => navigate("/1");

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
