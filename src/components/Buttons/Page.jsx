import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styles from "./styles.module.scss";

export const Page = ({
  finishText,
  isNextPage,
  handlePrev,
  handleNext,
  handleFinish,
  isTheLastPage,
}) => (
  <Box mb={8} className={styles.Buttons}>
    {!isTheLastPage ? (
      <>
        <IconButton disabled onClick={handlePrev}>
          <ArrowBackIcon fontSize="large" sx={{ fontSize: 56 }} />
        </IconButton>
        <IconButton disabled={!isNextPage} onClick={handleNext}>
          <ArrowForwardIcon
            sx={{ fontSize: 56 }}
            color={!isNextPage ? "disabled" : "primary"}
          />
        </IconButton>
      </>
    ) : (
      <Box mt={1}>
        <Button onClick={handleFinish} variant="outlined" size="large">
          {finishText}
        </Button>
      </Box>
    )}
  </Box>
);

Page.propTypes = {
  isNextPage: PropTypes.bool,
  handlePrev: PropTypes.func,
  handleNext: PropTypes.func,
  finishText: PropTypes.string,
  handleFinish: PropTypes.func,
  isTheLastPage: PropTypes.bool,
};
