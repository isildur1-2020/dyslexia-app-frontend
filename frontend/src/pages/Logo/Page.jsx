import React, { forwardRef } from "react";
import logoSrc from "../../assets/logo.png";
import styles from "./styles.module.scss";

export const Page = forwardRef((props, ref) => (
  <div className={styles.Logo}>
    <div className={`${styles.Logo__img} animate__animated`} ref={ref}>
      <img src={logoSrc} title="dyslexia-app" alt="dyslexia-app" />
    </div>
  </div>
));
