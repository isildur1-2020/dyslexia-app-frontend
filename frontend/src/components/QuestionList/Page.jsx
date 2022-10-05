import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
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
  const centerStyle = {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <>
      <Buttons />
      <Clock clockID={clockID} />
      <Box sx={centerStyle}>
        <Typography variant="h4" component="span" sx={{ fontWeight: 600 }}>
          <IconButton onClick={handleClick}>
            <VolumeUpIcon fontSize="large" color="primary" />
          </IconButton>
          {title}
        </Typography>
        <Box className={styles.QuestionList__list}>
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
      </Box>
    </>
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
