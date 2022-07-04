import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logoSrc from "../../assets/logo.png";
import styles from "./styles.module.scss";

export const Logo = () => {
  const logoRef = useRef();
  const navigate = useNavigate();

  const nextPage = () => navigate("/firstPage");

  const hiddenLogo = () => {
    logoRef.current.classList.remove("animate__fadeIn");
    logoRef.current.classList.add("animate__fadeOut");
    setTimeout(nextPage, 1500);
  };

  useEffect(() => {
    logoRef.current.classList.add("animate__fadeIn");
    setTimeout(hiddenLogo, 2000);
  }, []);

  return (
    <div className={styles.Logo}>
      <div className={`${styles.Logo__img} animate__animated`} ref={logoRef}>
        <img src={logoSrc} title="dyslexia-app" alt="dyslexia-app" />
      </div>
    </div>
  );
};
