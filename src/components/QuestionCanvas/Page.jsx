import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Clock } from "../../components/Clock/Clock";
import { AudioButton } from "../../components/AudioButton";
import { Buttons } from "../../components/Buttons/Buttons";

const centerStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const Page = ({ title, subtitle, Canvas, clockID, audioSrc }) => (
  <>
    <Buttons />
    <Clock clockID={clockID} />
    <Box sx={centerStyle}>
      <Box>
        <Typography variant="h4" component="span" sx={{ fontWeight: 600 }}>
          <AudioButton audioSrc={audioSrc} />
          {title}
        </Typography>
        <Box>
          <Typography align="center" variant="h4" component="h4">
            {subtitle}
          </Typography>
        </Box>
      </Box>
      <Box mt={2}>
        <Canvas />
      </Box>
    </Box>
  </>
);

Page.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  audioSrc: PropTypes.string,
  handleClick: PropTypes.func,
  clockID: PropTypes.number.isRequired,
  Canvas: PropTypes.elementType.isRequired,
};
