import React from "react";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Layout } from "../../components/Layout/Layout";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import styles from "./styles.module.scss";
import { Typography } from "@mui/material";

const containerStyle = {
  width: 300,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

export const Page = ({
  state,
  languajes,
  timeOptions,
  handleClick,
  handleTimeChange,
  handleLanguajeChange,
}) => {
  const { languaje, timePerQuestion } = state;
  return (
    <Layout>
      <Box className={styles.ChooseLang}>
        <Box mb={2}>
          <Typography variant="h5" component="span">
            Choose your languaje
          </Typography>
        </Box>
        <Box style={containerStyle}>
          <Select
            fullWidth
            displayEmpty
            id="languaje"
            name="languaje"
            value={languaje}
            onChange={handleLanguajeChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {languajes.length > 0 &&
              languajes.map((lang) => (
                <MenuItem key={lang} value={lang}>
                  {lang.toLocaleUpperCase()}
                </MenuItem>
              ))}
          </Select>
          <Box ml={1}>
            <Button
              disabled={languaje === "" || timePerQuestion === ""}
              variant="outlined"
              onClick={handleClick}
              sx={{ height: 56 }}
            >
              <KeyboardTabIcon />
            </Button>
          </Box>
        </Box>
        <Box>
          <Box mt={4} mb={2} display="flex" justifyContent="center">
            <Typography variant="h5" component="span">
              Minutes per question
            </Typography>
          </Box>
          <Select
            displayEmpty
            sx={{ width: 300 }}
            id="minutesPerQuestion"
            name="minutesPerQuestion"
            onChange={handleTimeChange}
            value={timePerQuestion}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {timeOptions.length > 0 &&
              timeOptions.map(({ label, time }) => (
                <MenuItem key={time} value={time}>
                  {label}
                </MenuItem>
              ))}
          </Select>
        </Box>
      </Box>
    </Layout>
  );
};

Page.propTypes = {
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
  handleTimeChange: PropTypes.func,
  handleLanguajeChange: PropTypes.func,
  languajes: PropTypes.arrayOf(PropTypes.string),

  state: PropTypes.shape({
    languaje: PropTypes.string,
    timePerQuestion: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  }).isRequired,

  timeOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      time: PropTypes.number,
    })
  ).isRequired,
};
