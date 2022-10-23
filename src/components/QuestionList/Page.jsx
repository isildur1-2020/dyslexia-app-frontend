import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Clock } from "../../components/Clock/Clock";
import { AudioButton } from "../../components/AudioButton";
import { Buttons } from "../../components/Buttons/Buttons";
import styles from "./styles.module.scss";

export const Page = ({
  list,
  title,
  clockID,
  fontSize,
  audioSrc,
  textStyle,
  backgroundColor,
}) => {
  const rectStyle = {
    border: "4px solid #0048AC",
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
          <AudioButton audioSrc={audioSrc} />
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
  audioSrc: PropTypes.string,
  textStyle: PropTypes.object,
  backgroundColor: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
};
