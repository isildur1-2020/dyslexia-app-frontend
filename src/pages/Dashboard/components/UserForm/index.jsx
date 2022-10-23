import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "../../../../hooks/useForm";
import { getUsername } from "../../../../utils/jwt";
import { createClient } from "../../../../services/adminService";
import { Page } from "./page";

export const UserForm = ({ setReload }) => {
  const [state, setState] = useState({
    username: "",
    password: "",
    tests: 0,
  });
  const { handleChange } = useForm(state, setState);

  const handleSubmit = async (ev) => {
    try {
      ev.preventDefault();
      const { username, password } = state;
      if (!username || !password) return;
      const data = {
        ...state,
        group_id: getUsername(),
      };
      const { err, message } = await createClient(data);
      alert(message);
    } catch (err) {
      console.log(err);
    } finally {
      setState({
        username: "",
        password: "",
        tests: 0,
      });
      setReload((s) => !s);
    }
  };
  return (
    <Page
      state={state}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

UserForm.propTypes = {
  reload: PropTypes.bool,
};
