import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Clock } from "../../components/Clock/Clock";
import { Buttons } from "../../components/Buttons/Buttons";

export const Page = ({ title, subtitle, Canvas }) => (
  <>
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
