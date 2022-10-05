import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { Clock } from "../../components/Clock/Clock";
import { Buttons } from "../../components/Buttons/Buttons";
import styles from "./styles.module.scss";

export const Page = ({
  list,
  title,
  clockID,
  fontSize,
  textStyle,
  borderColor,
  handleClick,
  backgroundColor,
}) => {
  const rectStyle = {
    border: `4px solid ${borderColor}`,
    backgroundColor: backgroundColor ?? "#fff",
  };
  return (
    <Box className={styles.QuestionList}>
      <Clock clockID={clockID} />
      <Box mt={8}>
        <Typography
          align="center"
          variant="h4"
          component="h4"
          sx={{ fontWeight: 600 }}
        >
          <Box>
            <IconButton onClick={handleClick}>
              <RecordVoiceOverIcon fontSize="large" color="primary" />
            </IconButton>
          </Box>
          {title}:
        </Typography>
      </Box>
      <Box className={styles.QuestionList__list} mt={2}>
        <ul style={rectStyle}>
          {list?.map((item) => (
            <div key={item}>
              <Typography style={textStyle} variant={fontSize} component="li">
                {item}
              </Typography>
            </div>
          ))}
        </ul>
      </Box>
      <Box mt={1}>
        <Buttons />
      </Box>
    </Box>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  clockID: PropTypes.number,
  fontSize: PropTypes.string,
  textStyle: PropTypes.object,
  handleClick: PropTypes.func,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
};
