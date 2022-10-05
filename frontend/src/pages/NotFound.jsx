import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const NotFound = () => (
  <Box
    sx={{
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Typography variant="h1" component="span">
      404 - Not Found
    </Typography>
  </Box>
);
