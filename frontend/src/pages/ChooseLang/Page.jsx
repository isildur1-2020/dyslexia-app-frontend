import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { Layout } from "../../components/Layout/Layout";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import styles from "./styles.module.scss";

export const Page = ({ languajes, state, handleChange, handleClick }) => (
  <Layout title="Choose your languaje">
    <div className={styles.ChooseLang}>
      <div className={styles.ChooseLang__container}>
        <TextField
          select
          id="languaje"
          label="Select"
          name="languaje"
          value={state.languaje}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value={0}>Choose your languaje...</MenuItem>
          {languajes.length > 0 &&
            languajes.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            ))}
        </TextField>
        <Box>
          <IconButton
            size="large"
            aria-label="next"
            component="span"
            onClick={handleClick}
          >
            <KeyboardTabIcon />
          </IconButton>
        </Box>
      </div>
    </div>
  </Layout>
);

Page.propTypes = {
  languajes: PropTypes.arrayOf(PropTypes.string),
  state: PropTypes.shape({
    languaje: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }),
  handleChange: PropTypes.func,
  navigate: PropTypes.func,
  handleClick: PropTypes.func,
};
