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

export const Page = ({ state, handleClick, timeOptions, handleTimeChange }) => {
  const { timePerQuestion, currentLanguaje } = state;
  return (
    <Layout>
      <Box className={styles.ChooseLang}>
        <Box mb={2}>
          <Typography variant="h5" component="span">
            {currentLanguaje?.timeTitle}
          </Typography>
        </Box>
        <Box style={containerStyle}>
          <Select
            fullWidth
            displayEmpty
            value={timePerQuestion}
            name="secondsPerQuestion"
            onChange={handleTimeChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {timeOptions.length > 0 &&
              timeOptions.map(({ label, time }) => (
                <MenuItem key={label} value={time}>
                  {label} {currentLanguaje?.timeMinutesLabel}
                </MenuItem>
              ))}
          </Select>
          <Box ml={1}>
            <Button
              disabled={timePerQuestion === ""}
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
  handleChange: PropTypes.func,
  handleTimeChange: PropTypes.func,

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
