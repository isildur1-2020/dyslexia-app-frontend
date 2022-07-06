import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MainContext } from "../../contexts/MainContext";
import { usePages } from "../../hooks/usePages";
import styles from "./styles.module.scss";

export const Buttons = () => {
  const { isPrevPage, isNextPage } = usePages();
  const { state, setState } = useContext(MainContext);
  const { questions, currentQuestion } = state;
  const navigate = useNavigate();

  const handlePrev = () => {
    if (currentQuestion === null) return;
    const prevQuestion = currentQuestion - 1;
    const index = questions.indexOf(prevQuestion);
    if (index === -1) return;
    const prevPage = questions[index];
    setState({
      ...state,
      currentQuestion: prevPage,
    });
    navigate(`/${prevPage}`);
  };

  const handleNext = () => {
    if (currentQuestion === null) return;
    const nextQuestion = currentQuestion + 1;
    const index = questions.indexOf(nextQuestion);
    if (index === -1) return;
    const nextPage = questions[index];
    setState({
      ...state,
      currentQuestion: nextPage,
    });
    navigate(`/${nextPage}`);
  };

  return (
    <Box mb={8} className={styles.Buttons}>
      <IconButton disabled={!isPrevPage} onClick={handlePrev}>
        <ArrowBackIcon
          color={!isPrevPage ? "disabled" : "primary"}
          sx={{ fontSize: 56 }}
          fontSize="large"
        />
      </IconButton>
      <IconButton disabled={!isNextPage} onClick={handleNext}>
        <ArrowForwardIcon
          color={!isNextPage ? "disabled" : "primary"}
          sx={{ fontSize: 56 }}
        />
      </IconButton>
    </Box>
  );
};
