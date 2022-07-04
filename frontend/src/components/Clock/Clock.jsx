import React, { useState, useEffect, useRef } from "react";
import { Page } from "./Page";

export const Clock = () => {
  const [totalSeconds, setTotalSeconds] = useState(4 * 60);
  let idAnimationRef = useRef();

  let startTimer = () => {
    setTimeout(() => {
      setTotalSeconds((s) => {
        if (!s) {
          cancelAnimationFrame(idAnimationRef);
          return 0;
        }
        return s - 1;
      });
      idAnimationRef = requestAnimationFrame(startTimer);
    }, [1000]);
  };

  useEffect(() => {
    idAnimationRef = requestAnimationFrame(startTimer);
  }, []);

  return (
    <Page minutes={Math.floor(totalSeconds / 60)} seconds={totalSeconds % 60} />
  );
};
