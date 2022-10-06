import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./styles.module.scss";

export const Page = ({ text }) => {
  return (
    <>
      {/* <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop> */}
      <Box className={styles.SendData}>
        <Typography variant="h2" component="span">
          {text}
        </Typography>
      </Box>
    </>
  );
};

Page.propTypes = {
  text: PropTypes.string,
};

Page.defaultProps = {
  text: "Loading...",
};
