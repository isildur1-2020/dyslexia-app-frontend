import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import { Clock } from "../../components/Clock/Clock";
import { Buttons } from "../../components/Buttons/Buttons";

export const Page = ({ title, subtitle, Canvas, clockID, handleClick }) => (
  <>
    <Clock clockID={clockID} />
    <Box mt={8}>
      <Typography
        align="center"
        variant="h4"
        component="p"
        sx={{ fontWeight: 600 }}
      >
        <Box>
          <IconButton onClick={handleClick}>
            <RecordVoiceOverIcon fontSize="large" color="primary" />
          </IconButton>
        </Box>
        {title}:
      </Typography>
      <Box mt={2}>
        <Typography align="center" variant="h4" component="p">
          {subtitle}
        </Typography>
      </Box>
    </Box>
    <Box mt={4}>
      <Canvas />
    </Box>
    <Box mt={1}>
      <Buttons />
    </Box>
  </>
);
