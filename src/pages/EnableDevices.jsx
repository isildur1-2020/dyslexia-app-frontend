import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const EnableDevices = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{ width: "100%", height: "100vh" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="h4" component="p">
        - ACTIVA los permisos para grabar tu CÁMARA
      </Typography>
      <Typography variant="h4" component="p">
        - ACTIVA los permisos para grabar tu MICROFONO
      </Typography>
      <Typography variant="h4" component="p">
        - ACTIVA los permisos para grabar la PANTALLA
      </Typography>
      <Box mt={6}>
        <Button
          onClick={() => navigate("/languaje")}
          size="large"
          variant="outlined"
        >
          SIGUIENTE
        </Button>
      </Box>
    </Box>
  );
};
