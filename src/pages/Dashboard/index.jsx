import React, { useState } from "react";
import { getUsername } from "../../utils/jwt";
import { createClient } from "../../services/adminService";
import { Page } from "./page";

export const Dashboard = () => {
  const [reload, setReload] = useState(false);
  const [state, setState] = useState({
    username: "",
    password: "",
    tests: 0,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

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
      reload={reload}
      setReload={setReload}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};
