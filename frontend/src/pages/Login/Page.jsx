import React from "react";
import PropTypes from "prop-types";
import { Layout } from "../../components/Layout/Layout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Input from "@mui/material/Input";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";
import { InputLabel, Typography } from "@mui/material";

export const Page = ({
  handleSubmit,
  state,
  handleShowPassword,
  handleChange,
  isCompleted,
}) => {
  const { username, password, showPassword, currentLanguaje } = state;
  return (
    <Layout title="">
      <div className={styles.Login}>
        <form onSubmit={handleSubmit}>
          <div className={styles.Login__container}>
            <Box
              mb={8}
              fullWidth
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Avatar sx={{ width: 56, height: 56 }}>
                <PersonIcon fontSize="large" />
              </Avatar>
              <Box mt={2}>
                <Typography component="span" variant="h5">
                  Login
                </Typography>
              </Box>
            </Box>
            <Box mb={4}>
              <InputLabel htmlFor="user-username">
                {currentLanguaje.user}
              </InputLabel>
              <Input
                fullWidth
                id="user-username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Box>
            <Box>
              <InputLabel htmlFor="user-password">
                {currentLanguaje.password}
              </InputLabel>
              <Input
                fullWidth
                id="user-password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleShowPassword}
                    >
                      {showPassword ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Box>
            <Box mt={6}>
              <Button
                disabled={!isCompleted}
                type="submit"
                fullWidth
                variant="contained"
                size="large"
              >
                {currentLanguaje.submit}
              </Button>
            </Box>
          </div>
        </form>
      </div>
    </Layout>
  );
};

Page.propTypes = {
  handleSubmit: PropTypes.func,
  state: PropTypes.object,
  handleShowPassword: PropTypes.func,
  handleChange: PropTypes.func,
  isCompleted: PropTypes.bool,
};
