import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { UserInfo } from "./components/UserInfo";
import { UserForm } from "./components/UserForm";
import { SoundsForm } from "./components/SoundsForm";
import { Layout } from "../../components/Layout/Layout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LanguajesForm } from "./components/LanguajesForm";

const centerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const Page = ({
  state,
  reload,
  setReload,
  handleChange,
  handleSubmit,
  handleBackClick,
}) => {
  return (
    <Layout>
      <Box sx={centerStyle}>
        <Box my={4}>
          <Button
            disableElevation
            variant="outlined"
            onClick={handleBackClick}
            startIcon={<ArrowBackIcon />}
          >
            Logout and back to login
          </Button>
        </Box>
        <Box mt={2}>
          <UserForm setReload={setReload} />
        </Box>
        <Box my={8}>
          <UserInfo reload={reload} setReload={setReload} />
        </Box>
        <Box mt={4} mb={8}>
          <LanguajesForm
            state={state}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Box>
        <Box mt={4} mb={16}>
          <SoundsForm
            state={state}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Box>
      </Box>
    </Layout>
  );
};

Page.propTypes = {
  reload: PropTypes.bool,
  state: PropTypes.object,
  setReload: PropTypes.func,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleBackClick: PropTypes.func,
};
