import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Clock } from "../../components/Clock/Clock";
import { Buttons } from "../../components/Buttons/Buttons";
import styles from "./styles.module.scss";

export const Page = ({
  title,
  list,
  borderColor,
  backgroundColor,
  fontSize,
  textStyle,
}) => {
  const rectStyle = {
    border: `4px solid ${borderColor}`,
    backgroundColor: backgroundColor ? backgroundColor : "#fff",
  };
  return (
    <Box className={styles.QuestionList}>
      <Clock />
      <Box mt={12}>
        <Typography
          align="center"
          variant="h4"
          component="p"
          sx={{ fontWeight: 600 }}
        >
          {title}:
        </Typography>
      </Box>
      <Box className={styles.QuestionList__list} mt={4}>
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
