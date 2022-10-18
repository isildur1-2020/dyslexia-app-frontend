import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Languajes } from "../../components/Languajes";
import { Layout } from "../../components/Layout/Layout";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import styles from "./styles.module.scss";

const containerStyle = {
  width: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const Page = ({ state, handleClick }) => {
  const { languaje } = state;
  return (
    <Layout>
      <Box className={styles.ChooseLang}>
        <Box mb={2}>
          <Typography variant="h5" component="span">
            Choose your languaje
          </Typography>
        </Box>
        <Box style={containerStyle}>
          <Languajes />
          <Box ml={1}>
            <Button
              disabled={languaje === ""}
              variant="outlined"
              onClick={handleClick}
              sx={{ height: 56 }}
            >
              <KeyboardTabIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

Page.propTypes = {
  handleClick: PropTypes.func,

  state: PropTypes.shape({
    languaje: PropTypes.string,
    timePerQuestion: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,
};
