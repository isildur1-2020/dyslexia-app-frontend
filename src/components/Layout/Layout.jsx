import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "../../assets/logo_header.png";
import styles from "./styles.module.scss";

export const Layout = ({ title, children }) => (
  <div className={styles.Layout}>
    <Box sx={{ flexGrow: 1, height: 74 }}>
      <AppBar position="sticky" sx={{ backgroundColor: "#00D1E1" }}>
        <Toolbar>
          <div className={styles.Layout__logo}>
            <img src={logo} alt="dyslexia-app" title="dyslexia-app" />
          </div>
          <Typography
            variant="h6"
            component="span"
            sx={{ flexGrow: 1, marginLeft: 6 }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    {children}
  </div>
);
