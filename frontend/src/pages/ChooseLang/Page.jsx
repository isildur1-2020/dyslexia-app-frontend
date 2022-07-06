import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Layout } from "../../components/Layout/Layout";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";

export const Page = ({ state, languajes, handleClick, handleChange }) => (
  <Layout title="">
    <div className={styles.ChooseLang}>
      <Box mb={3}>
        <Typography variant="h5" component="span">
          Choose your languaje
        </Typography>
      </Box>
      <div className={styles.ChooseLang__container}>
        <TextField
          select
          id="languaje"
          name="languaje"
          value={state.languaje}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value={0}>Select...</MenuItem>
          {languajes.length > 0 &&
            languajes.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            ))}
        </TextField>
        <Box ml={1}>
          <Button
            disabled={!state.languaje}
            variant="outlined"
            onClick={handleClick}
            sx={{ height: 56 }}
          >
            <KeyboardTabIcon />
          </Button>
        </Box>
      </div>
      <Box mt={4}>
        <Typography align="center" variant="h6" component="p">
          Time per question (seconds)
        </Typography>
        <TextField
          type="number"
          id="secondsPerQuestion"
          name="secondsPerQuestion"
          placeholder="default - 240 seconds"
          value={state.secondsPerQuestion}
          onChange={handleChange}
          sx={{ width: 300 }}
        />
      </Box>
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
