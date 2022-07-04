import React, { useRef, useEffect } from "react";
import { Clock } from "../../components/Clock/Clock";
import Box from "@mui/material/Box";
import styles from "./styles.module.scss";
import Typography from "@mui/material/Typography";
import { WebCam } from "../../components/WebCam/WebCam";

export const Page = () => {
  const canvasRef = useRef(null);
  let ctx = useRef();
  let rect = useRef();

  useEffect(() => {
    ctx = canvasRef.current.getContext("2d");
  }, []);

  const draw = (x, y) => {
    const pointSize = 3;
    ctx.fillStyle = "#ff2626";
    ctx.beginPath();
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true);
    ctx.fill();
  };

  const handleClick = (ev) => {
    console.log(ev);
    const { clientX, clientY } = ev;
    rect = canvasRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    console.log(x, y);
    draw(x, y);
  };

  return (
    <Box className={styles.FirstPage}>
      <Clock />
      <Box mt={12}>
        <Typography align="center" variant="h4" component="p">
          Please copy the following sentences below
        </Typography>
        <Typography align="center" variant="h5" component="p">
          The cat is a real bird
        </Typography>
      </Box>
      <Box className={styles.FirstPage__canvas}>
        <canvas
          id="canvas-paint"
          ref={canvasRef}
          onMouseDown={handleClick}
        ></canvas>
      </Box>
      <WebCam />
    </Box>
  );
};
