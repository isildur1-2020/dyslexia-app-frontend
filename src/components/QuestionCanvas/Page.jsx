import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Clock } from "../../components/Clock/Clock";
import { Buttons } from "../../components/Buttons/Buttons";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const centerStyle = {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

export const Page = ({ title, subtitle, Canvas, clockID, handleClick }) => (
  <>
    <Buttons />
    <Clock clockID={clockID} />
    <Box sx={centerStyle}>
      <Box>
        <Typography variant="h4" component="span" sx={{ fontWeight: 600 }}>
          <IconButton onClick={handleClick}>
            <VolumeUpIcon fontSize="large" color="primary" />
          </IconButton>
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
  Canvas: PropTypes.elementType.isRequired,
  clockID: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
};
