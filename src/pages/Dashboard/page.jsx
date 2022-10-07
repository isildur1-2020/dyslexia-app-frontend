import React from "react";
import Box from "@mui/material/Box";
import { UserInfo } from "./components/UserInfo";
import { UserForm } from "./components/UserForm";
import { Layout } from "../../components/Layout/Layout";

const centerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export const Page = ({
  state,
  handleChange,
  handleSubmit,
  reload,
  setReload,
}) => {
  return (
    <Layout>
      <Box sx={centerStyle}>
        <Box mt={8}>
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
