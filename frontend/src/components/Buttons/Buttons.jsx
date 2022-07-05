import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./styles.module.scss";

export const Buttons = () => {
  const navigate = useNavigate();
  return (
    <Box className={styles.Buttons}>
      <IconButton>
        <ArrowBackIcon color="primary" sx={{ fontSize: 56 }} fontSize="large" />
      </IconButton>
      <IconButton>
        <ArrowForwardIcon color="primary" sx={{ fontSize: 56 }} />
      </IconButton>
    </Box>
  );
};
