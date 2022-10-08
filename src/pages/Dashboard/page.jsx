import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { UserInfo } from "./components/UserInfo";
import { UserForm } from "./components/UserForm";
import { Layout } from "../../components/Layout/Layout";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
          <UserForm
            state={state}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </Box>
        <Box my={8}>
          <UserInfo reload={reload} setReload={setReload} />
        </Box>
      </Box>
    </Layout>
  );
};
