import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import styles from "./styles.module.scss";

export const Page = ({ minutes, seconds }) => {
  const mins = `0${minutes}`;
  const twoDigits = Math.floor(seconds / 10) > 0;
  const secs = !twoDigits ? `0${seconds}` : seconds;
  return (
    <div className={styles.FirstPage}>
      <Box className={styles.Clock}>
        <Button fullWidth disableElevation size="large" variant="outlined">
          <Typography variant="h4">
            {mins}:{secs}
          </Typography>
        </Button>
      </Box>
    </div>
  );
};
